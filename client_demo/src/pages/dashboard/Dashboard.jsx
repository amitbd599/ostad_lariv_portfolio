import DashboardLayout from "../../layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <section className='h-full'>
        <div className='container mx-auto'>
          <h2 className='text-[50px] font-semibold'>
            Hello This Our Dashboard!
          </h2>
          <div className='grid grid-cols-12 gap-[30px] mt-[50px]'>
            <div className='col-span-4'>
              <div className='bg-purple-600 px-[30px] py-[20px] rounded-lg mt-[10px]'>
                <h2 className='text-[20px] font-semibold'>
                  Total experience: 10
                </h2>
              </div>
            </div>
            <div className='col-span-4'>
              <div className='bg-red-600 px-[30px] py-[20px] rounded-lg mt-[10px]'>
                <h2 className='text-[20px] font-semibold'>
                  Total education: 10
                </h2>
              </div>
            </div>
            <div className='col-span-4'>
              <div className='bg-teal-600 px-[30px] py-[20px] rounded-lg mt-[10px]'>
                <h2 className='text-[20px] font-semibold'>
                  Total advantage: 10
                </h2>
              </div>
            </div>
            <div className='col-span-4'>
              <div className='bg-yellow-600 px-[30px] py-[20px] rounded-lg mt-[10px]'>
                <h2 className='text-[20px] font-semibold'>
                  Total portfolio: 10
                </h2>
              </div>
            </div>
            <div className='col-span-4'>
              <div className='bg-blue-600 px-[30px] py-[20px] rounded-lg mt-[10px]'>
                <h2 className='text-[20px] font-semibold'>Total service: 10</h2>
              </div>
            </div>
            <div className='col-span-4'>
              <div className='bg-green-600 px-[30px] py-[20px] rounded-lg mt-[10px]'>
                <h2 className='text-[20px] font-semibold'>Total blog: 10</h2>
              </div>
            </div>
            <div className='col-span-4'>
              <div className='bg-pink-600 px-[30px] py-[20px] rounded-lg mt-[10px]'>
                <h2 className='text-[20px] font-semibold'>Total comment: 10</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Dashboard;
