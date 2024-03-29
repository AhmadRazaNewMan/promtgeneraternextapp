import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover And Share AI Prompts
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Study AI algorithms</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi impedit
        et voluptatibus. Explicabo libero doloribus harum tenetur delectus
        temporibus! Natus?
      </p>
      <Feed/>
    </section>
  );
};

export default Home;
