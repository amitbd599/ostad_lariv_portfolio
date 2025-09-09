import { useEffect } from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import BlogStore from "../../../store/BlogStore";
import { DeleteAlert, formatDate } from "../../../helper/helper";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import Skeleton from "react-loading-skeleton";
import { Link, useNavigate, useParams } from "react-router-dom";

const GetAllBlog = () => {
  const { pageNo } = useParams();
  const navigate = useNavigate();
  let item = 10;
  let { allBlogData, totalBlog, allBlogRequest, deleteBlogRequest } =
    BlogStore();

  useEffect(() => {
    allBlogRequest(item, pageNo);
  }, [allBlogRequest, item, pageNo]);

  //! handelPageClick
  const handelPageClick = async (event) => {
    let pageNo = event.selected;
    await allBlogRequest(10, pageNo + 1);
    navigate(`/get-all-blog/${pageNo + 1}`);
  };

  let deleteBlog = async (id) => {
    let res = await DeleteAlert(deleteBlogRequest, id);
    if (res) {
      allBlogRequest(item, parseInt(pageNo));
    }
  };

  return (
    <DashboardLayout>
      <section className='mt-[50px]'>
        <div className='container mx-auto '>
          <div>
            <div className='border border-gray-200 px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <h2 className='text-[30px] font-bold'>Get All Blog</h2>
              </div>
              <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md m-5'>
                {allBlogData !== null ? (
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
                          Image
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-4 font-medium text-gray-900'
                        >
                          category
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
                      {allBlogData?.map((item, index) => (
                        <tr className='hover:bg-gray-50' key={index}>
                          <th className='flex gap-3 px-6 py-4 font-normal text-gray-900'>
                            {item?.title}
                          </th>
                          <td className='px-6 py-4'>
                            <img
                              className='w-[30px] h-[30px] object-cover'
                              src={`/api/v1/get-file/${item?.img}`}
                              alt=''
                            />
                          </td>
                          <td className='px-6 py-4'>{item?.category}</td>
                          <td className='px-6 py-4'>
                            {formatDate(item?.createdAt)}
                          </td>

                          <td className='px-6 py-4'>
                            <div className='flex justify-end gap-4'>
                              <button onClick={() => deleteBlog(item?._id)}>
                                <FaRegTrashAlt className='text-[22px]' />
                              </button>
                              <Link to={`/update-single-blog/${item?._id}`}>
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
              <div className='d-flex align-items-center justify-content-between flex-wrap gap-2 mt-24'>
                <span>Showing 1 to 10 of {totalBlog} entries</span>
                {totalBlog > 10 ? (
                  <div>
                    <ReactPaginate
                      className='flex justify-center space-x-4'
                      previousLabel='<'
                      nextLabel='>'
                      pageClassName='pagination'
                      activeClassName='pagination'
                      pageLinkClassName=' pagination'
                      previousLinkClassName='pagination'
                      nextLinkClassName='pagination'
                      activeLinkClassName=' pagination active'
                      breakLabel='...'
                      pageCount={totalBlog / 10}
                      initialPage={pageNo - 1}
                      pageRangeDisplayed={3}
                      onPageChange={handelPageClick}
                      type='button'
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default GetAllBlog;
