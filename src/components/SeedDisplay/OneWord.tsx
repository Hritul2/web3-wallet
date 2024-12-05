const OneWord = ({ word }: { word: string }) => {
  return (
    <p className="text-sm sm:text-base lg:text-lg bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 rounded-lg p-2 sm:p-4 text-center">
      {word}
    </p>
  );
};

export default OneWord;
