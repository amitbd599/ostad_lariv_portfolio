import { useEffect } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import UserStore from "../../store/UserStore";
import Skeleton from "react-loading-skeleton";

const Dashboard = () => {
  let { dashboardRequest, dashboardData } = UserStore();

  useEffect(() => {
    dashboardRequest();
  }, [dashboardRequest]);

  return (
    <DashboardLayout>
      <section className='h-full'>
        <div className='container mx-auto'>
          <h2 className='text-[50px] font-semibold'>
            Hello This Our Dashboard!
          </h2>
          <div className='grid grid-cols-12 gap-[30px] mt-[50px]'>
            <div className='col-span-4'>
              {dashboardData !== null ? (
                <div className='bg-purple-600 px-[30px] py-[20px] rounded-lg mt-[10px]'>
                  <h2 className='text-[20px] font-semibold'>
                    Total experience: {dashboardData?.experience?.count}
                  </h2>
                </div>
              ) : (
                <>
                  <Skeleton count={5} baseColor='#111827' />{" "}
                </>
              )}
            </div>
            <div className='col-span-4'>
              {dashboardData !== null ? (
                <div className='bg-red-600 px-[30px] py-[20px] rounded-lg mt-[10px]'>
                  <h2 className='text-[20px] font-semibold'>
                    Total education: {dashboardData?.education?.count}
                  </h2>
                </div>
              ) : (
                <>
                  <Skeleton count={5} baseColor='#111827' />{" "}
                </>
              )}
            </div>
            <div className='col-span-4'>
              {dashboardData !== null ? (
                <div className='bg-teal-600 px-[30px] py-[20px] rounded-lg mt-[10px]'>
                  <h2 className='text-[20px] font-semibold'>
                    Total advantage: {dashboardData?.advantage?.count}
                  </h2>
                </div>
              ) : (
                <>
                  <Skeleton count={5} baseColor='#111827' />
                </>
              )}
            </div>
            <div className='col-span-4'>
              {dashboardData !== null ? (
                <div className='bg-yellow-600 px-[30px] py-[20px] rounded-lg mt-[10px]'>
                  <h2 className='text-[20px] font-semibold'>
                    Total portfolio: {dashboardData?.portfolio?.count}
                  </h2>
                </div>
              ) : (
                <>
                  <Skeleton count={5} baseColor='#111827' />{" "}
                </>
              )}
            </div>
            <div className='col-span-4'>
              {dashboardData !== null ? (
                <div className='bg-blue-600 px-[30px] py-[20px] rounded-lg mt-[10px]'>
                  <h2 className='text-[20px] font-semibold'>
                    Total service: {dashboardData?.service?.count}
                  </h2>
                </div>
              ) : (
                <>
                  <Skeleton count={5} baseColor='#111827' />{" "}
                </>
              )}
            </div>
            <div className='col-span-4'>
              {dashboardData !== null ? (
                <div className='bg-green-600 px-[30px] py-[20px] rounded-lg mt-[10px]'>
                  <h2 className='text-[20px] font-semibold'>
                    Total blog: {dashboardData?.blog?.count}
                  </h2>
                </div>
              ) : (
                <>
                  <Skeleton count={5} baseColor='#111827' />{" "}
                </>
              )}
            </div>
            <div className='col-span-4'>
              {dashboardData !== null ? (
                <div className='bg-pink-600 px-[30px] py-[20px] rounded-lg mt-[10px]'>
                  <h2 className='text-[20px] font-semibold'>
                    Total comment: {dashboardData?.comment?.count}
                  </h2>
                </div>
              ) : (
                <>
                  <Skeleton count={5} baseColor='#111827' />{" "}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Dashboard;
