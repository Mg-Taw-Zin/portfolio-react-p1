const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center gap-y-5  my-10">
      <h1 className=" text-2xl uppercase font-semibold">Contact</h1>
      <form
        action="https://getform.io/f/65cd6c45-a6cb-495a-9c21-e676b960fe65"
        method="POST"
        className="flex flex-col gap-y-3 text-sm w-[500px] md:w-[400px] sm:w-full sm:px-5"
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          className=" outline-none border border-gray-400 p-2 w-full"
        />
        <input
          type="email
        "
          name="email"
          placeholder="Email"
          className=" outline-none border border-gray-400 p-2 w-full"
        />
        <textarea
          placeholder="Message"
          cols="20"
          rows="10"
          name="message
          "
          className=" outline-none border border-gray-400 p-2 w-full
        "
        ></textarea>
        <input
          type="submit"
          value="Send Message"
          className=" outline-none border border-gray-400 p-2 w-full bg-slate-400 text-white cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Contact;
