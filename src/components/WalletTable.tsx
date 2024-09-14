import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "./ui/card";

const WalletTable = () => {
  return (
    <Card className="w-full bg-background/80">
      <CardContent>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default WalletTable;
