import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Poered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI propmting tool for modern world to
        discover, create and share creative propmts.
      </p>
      {/* feed Component */}

      <Feed />
    </section>
  );
};

export default Home;
