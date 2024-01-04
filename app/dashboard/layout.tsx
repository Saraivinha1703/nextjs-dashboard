import SideNav from '@/app/ui/dashboard/sidenav';
import { ScrollArea } from '@/app/ui/scrollArea';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <ScrollArea className="flex-grow p-6 md:p-12" breakpoint="md">
        {children}
      </ScrollArea>
    </div>
  );
}
