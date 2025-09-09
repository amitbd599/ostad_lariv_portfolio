import { useEffect } from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import FileStore from "../../../store/FileStore";
import {
  DeleteAlert,
  DeleteAlertFile,
  formatDate,
} from "../../../helper/helper";
import { FaRegTrashAlt } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";

const GetAllUploadFile = () => {
  let { allFileData, allFileRequest, deleteFileRequest } = FileStore();

  useEffect(() => {
    allFileRequest();
  }, [allFileRequest]);

  let deleteFile = async (id, filename) => {
    let res = await DeleteAlertFile(deleteFileRequest, id, filename);
    if (res) {
      allFileRequest();
    }
  };

  return (
    <DashboardLayout>
      <section className='mt-[50px]'>
        <div className='container mx-auto '>
          <div>
            <div className='border border-gray-200 px-[30px] py-[40px] rounded-[20px] max-h-[60vh] overflow-y-auto'>
              <div>
                <h2 className='text-[30px] font-bold'>Get All Upload File</h2>
              </div>
              <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md m-5'>
                {allFileData !== null ? (
                  <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          className='px-6 py-4 font-medium text-gray-900'
                        >
                          Image
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-4 font-medium text-gray-900'
                        >
                          Path
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
                      {allFileData?.map((item, index) => (
                        <tr className='hover:bg-gray-50' key={index}>
                          <th className='flex gap-3 px-6 py-4 font-normal text-gray-900'>
                            <img
                              className='w-[60] h-[60px] object-cover'
                              src={`/api/v1/get-file/${item?.filename}`}
                              alt=''
                            />
                          </th>
                          <td className='px-6 py-4'>{item?.filename}</td>
                          <td className='px-6 py-4'>
                            {formatDate(item?.createdAt)}
                          </td>

                          <td className='px-6 py-4'>
                            <div className='flex justify-end gap-4'>
                              <button
                                onClick={() =>
                                  deleteFile(item?._id, item?.filename)
                                }
                              >
                                <FaRegTrashAlt className='text-[22px]' />
                              </button>
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

export default GetAllUploadFile;
