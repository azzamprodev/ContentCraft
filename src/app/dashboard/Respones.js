import TypewriterComponent from "typewriter-effect";

export const Response = ({ responesValue, toggleTypeEffect }) => {
  return (
    <div className="mt-24 mb-60 rounded-lg text-teal-800 text-xl text-center">
      {toggleTypeEffect === true ? (
        <TypewriterComponent
          options={{
            strings: [
              "I'm an AI copywriting assistant 🚀",
              "How can I assist you today ? 😄",
              "ContentCraft is coded by Azzam Alzeidi 💪🏻 ",
            ],
            autoStart: true,
            loop: true,
            delay: 20,
            deleteSpeed: 20,
          }}
        />
      ) : (
        <TypewriterComponent
          options={{
            strings: [responesValue],
            autoStart: true,
            loop: false,
            delay: 10,
            deleteSpeed: 30,
            pauseFor: 1000000000,
          }}
        />
      )}
    </div>
  );
};
