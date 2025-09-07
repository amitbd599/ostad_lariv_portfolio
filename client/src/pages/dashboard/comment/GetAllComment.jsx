import { useEffect } from "react";
import { DeleteAlert, formatDate } from "../../../helper/helper";
import DashboardLayout from "../../../layout/DashboardLayout";
import CommentStore from "../../../store/CommentStore";
import { FaRegTrashAlt } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";

const GetAllComment = () => {
  let { allCommentData, allCommentRequest, deleteCommentRequest } =
    CommentStore();

  useEffect(() => {
    allCommentRequest();
  }, [allCommentRequest]);

  let deleteComment = async (id) => {
    let res = await DeleteAlert(deleteCommentRequest, id);
    if (res) {
      allCommentRequest();
    }
  };
  return (
    <DashboardLayout>
      <section className='mt-[50px]'>
        <div className='container mx-auto '>
          <div>
            <div className='border border-gray-200 px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <h2 className='text-[30px] font-bold'>Get All Comment</h2>
              </div>
              <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md m-5'>
                {allCommentData !== null ? (
                  <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          className='px-6 py-4 font-medium text-gray-900'
                        >
                          Name
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-4 font-medium text-gray-900'
                        >
                          blogID
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-4 font-medium text-gray-900'
                        >
                          Email
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-4 font-medium text-gray-900'
                        >
                          Message
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
                      {allCommentData?.map((item, index) => (
                        <tr className='hover:bg-gray-50' key={index}>
                          <th className='flex gap-3 px-6 py-4 font-normal text-gray-900'>
                            {item?.name}
                          </th>
                          <td className='px-6 py-4'>{item?.blogID}</td>
                          <td className='px-6 py-4'>{item?.email}</td>
                          <td className='px-6 py-4'>{item?.comment}</td>
                          <td className='px-6 py-4'>
                            {formatDate(item?.createdAt)}
                          </td>

                          <td className='px-6 py-4'>
                            <div className='flex justify-end gap-4'>
                              <button onClick={() => deleteComment(item?._id)}>
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

export default GetAllComment;
