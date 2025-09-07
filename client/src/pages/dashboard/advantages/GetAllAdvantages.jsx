import { useEffect } from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import AdvantageStore from "../../../store/AdvantageStore";
import { DeleteAlert, formatDate } from "../../../helper/helper";
import Skeleton from "react-loading-skeleton";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const GetAllAdvantages = () => {
  let { allAdvantageData, allAdvantageRequest, deleteAdvantageRequest } =
    AdvantageStore();

  useEffect(() => {
    allAdvantageRequest();
  }, [allAdvantageRequest]);

  let deleteExperience = async (id) => {
    let res = await DeleteAlert(deleteAdvantageRequest, id);
    if (res) {
      allAdvantageRequest();
    }
  };
  return (
    <DashboardLayout>
      <section className='mt-[50px]'>
        <div className='container mx-auto '>
          <div>
            <div className='border border-gray-200 px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <h2 className='text-[30px] font-bold'>Get All Advantages</h2>
              </div>
              <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md m-5'>
                {allAdvantageData !== null ? (
                  <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          className='px-6 py-4 font-medium text-gray-900'
                        >
                          Title
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-4 font-medium text-gray-900'
                        >
                          Category
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-4 font-medium text-gray-900'
                        >
                          Percent
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-4 font-medium text-gray-900'
                        >
                          Created At
                        </th>
                        <th
                          scope='col'
                          className='text-end px-6 py-4 font-medium text-gray-900'
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
                      {allAdvantageData?.map((item, index) => (
                        <tr className='hover:bg-gray-50' key={index}>
                          <th className='flex gap-3 px-6 py-4 font-normal text-gray-900'>
                            {item?.title}
                          </th>
                          <td className='px-6 py-4'>{item?.category}</td>
                          <td className='px-6 py-4'>{item?.percent}</td>
                          <td className='px-6 py-4'>
                            {formatDate(item?.createdAt)}
                          </td>

                          <td className='px-6 py-4'>
                            <div className='flex justify-end gap-4'>
                              <button
                                onClick={() => deleteExperience(item?._id)}
                              >
                                <FaRegTrashAlt className='text-[22px]' />
                              </button>
                              <Link
                                to={`/update-single-advantages/${item?._id}`}
                              >
                                <FaRegEdit className='text-[22px]' />
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className='w-full p-3'>
                    <Skeleton width={"full"} count={5} baseColor='#111827' />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default GetAllAdvantages;
