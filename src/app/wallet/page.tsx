import SeedArea from "@/components/SeedArea";
import WalletTable from "@/components/WalletTable";

const page = () => {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-[75vh] p-4 gap-4">
      <SeedArea />
      <WalletTable />
    </div>
  );
};

export default page;
