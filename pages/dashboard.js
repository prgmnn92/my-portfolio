import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getAllFormSubmissions } from "../firebase";
import { useAuth } from "../store/auth-context";

import Container from "../components/Container";
import MagneticButton from "../components/MagneticButton";

const Dashboard = (props) => {
  const { formSubmissions } = props;
  const parsedSubmissions = JSON.parse(formSubmissions);

  const { authUser, loading, logout } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading, router]);

  return (
    <>
      <Container>
        <div className="absolute right-8 top-8">
          <MagneticButton onClick={logout}>Logout</MagneticButton>
        </div>
        <section className="py-8 md:pt-4 md:pb-16">
          <h2 className="pb-4 text-xl font-medium md:text-3xl text-brick-red md:pb-8">
            Form Submissions 👋
          </h2>
          {parsedSubmissions.length <= 0 && <div>No submissions so far...</div>}
          {parsedSubmissions ? (
            parsedSubmissions
              .sort(function (a, b) {
                return b.date.seconds - a.date.seconds;
              })
              .map((item, id) => {
                const date = new Date(item.date.seconds * 1000);
                return (
                  <div
                    key={id}
                    className="p-4 mb-4 bg-white drop-shadow rounded-2xl"
                  >
                    <div className="pb-4 pr-4">{date.toLocaleString()}</div>
                    <div className="flex">
                      <div>
                        <div className="pr-4 font-bold">Name</div>
                        <div className="pr-4">{item.name}</div>
                      </div>
                      <div>
                        <div className="px-4 font-bold">Email</div>
                        <div className="px-4">{item.email}</div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="pr-4 font-bold">Message</div>
                      <div className="pr-4">{item.message.html}</div>
                    </div>
                  </div>
                );
              })
          ) : (
            <div>Loading...</div>
          )}
        </section>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const fetchedSubmissions = await getAllFormSubmissions();
  const submissions = JSON.stringify(fetchedSubmissions);
  return {
    props: {
      formSubmissions: submissions,
    }, // will be passed to the page component as props
  };
}

export default Dashboard;

// TODO: provide site only when signed in (remove flashing of site)
