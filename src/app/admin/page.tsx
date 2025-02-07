import AdminLayout from "@/app/layouts/AdminLayout";
import { supabase } from "@/app/helpers/utils/supabaseClient";
import AdminCarSection from "@/app/components/section/AdminCarSection";
import CallModalSection from "@/app/components/section/CallModalSection";

const { data, error } = await supabase
    .from("cars")
    .select("*")
    .order("created_at", { ascending: false });

if (error) {
    console.error("Error fetching data:", error);
}

const Admin = () => {
    return (
        <AdminLayout>
            <main className="p-3 sm:p-5 md:p-10 pb-28">
                <div className="p-12">
                    <h1 className="text-center font-inter font-semibold tracking-tight text-[4.5vw] sm:text-[23px] md:text-[30px]">
                        The Urban Ride Admin
                    </h1>
                </div>

                <AdminCarSection cars={data ?? []} />

                <CallModalSection />
            </main>
        </AdminLayout>
    );
};

export default Admin;
