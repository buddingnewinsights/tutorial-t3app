import { type NextPage } from "next";

const ProfilePage: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col gap-5 border-x border-b border-slate-400 py-8">
          <h1>Profile View</h1>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
