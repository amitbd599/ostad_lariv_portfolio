import {
  FaBlog,
  FaClockRotateLeft,
  FaFacebookF,
  FaGitAlt,
  FaLinkedinIn,
  FaQuoteLeft,
  FaRegCommentDots,
  FaTwitter,
} from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import BlogStore from "../store/BlogStore";
import { useEffect } from "react";
import { formatDate } from "../helper/helper";

const BlogDetailsComponent = () => {
  let { id } = useParams();
  let { singleBlogRequest, singleBlogData } = BlogStore();

  useEffect(() => {
    singleBlogRequest(id);
  }, [id, singleBlogRequest]);

  console.log(singleBlogData);

  return (
    <>
      <section className='py-[30px] md:py-[80px]'>
        <div className='container'>
          <div className='menuBox' data-aos='fade-up' data-aos-delay='50'>
            <div className=' inline-block rounded-full border border-text px-[20px] py-[5px]'>
              <div className='flex items-center gap-[6px]'>
                <span>
                  <FaBlog className='fa-light fa-user text-[14px] text-white' />
                </span>
                <span className='pl-[6px] text-[14px] text-white'>
                  Blog Details
                </span>
              </div>
            </div>
          </div>
          <div className='mt-[60px]  '>
            <div>
              <div
                className='w-full overflow-hidden lg:h-[720px]'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <img
                  src={`/api/v1/get-file/${singleBlogData?.img}`}
                  alt='Lariv - React Portfolio Template'
                  className='h-full w-full rounded-lg object-cover'
                />
              </div>
              <div
                className='title mt-[40px]'
                data-aos='fade-up'
                data-aos-delay='150'
              >
                <h2 className='text-[26px] font-semibold capitalize leading-[36px] text-white md:text-[32px] md:leading-[42px]'>
                  {singleBlogData?.category}
                </h2>
              </div>
              <div
                className='mt-[20px] flex items-center gap-[20px]'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <div className='flex items-center gap-[10px]'>
                  <span>
                    <FaClockRotateLeft className='text-base text-theme' />
                  </span>
                  <span className='text-sm text-text'>
                    {" "}
                    {formatDate(singleBlogData?.createdAt)}
                  </span>
                </div>
                <div className='flex items-center gap-[10px]'>
                  <span>
                    <FaRegCommentDots className='text-base text-theme' />
                  </span>
                  <span className='text-sm text-text'>
                    {singleBlogData?.comments ? 0 : singleBlogData?.comments}{" "}
                    Comments
                  </span>
                </div>
              </div>
              <div
                className='mt-[30px]'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                {parse(singleBlogData?.description || "")}
              </div>
              <div className='mt-[30px]'>
                <div className='grid items-center justify-between md:flex'>
                  <div data-aos='fade-up' data-aos-delay='100'>
                    <p className='text-[18px] font-semibold text-white'>
                      By Alex Johan
                    </p>
                  </div>
                </div>
              </div>
              <div className='mt-[30px] md:mt-[10px]'>
                <div data-aos='fade-up' data-aos-delay='100'>
                  <h2 className='text-[22px] font-semibold text-white'>
                    {singleBlogData?.comments ? 0 : singleBlogData?.comments}{" "}
                    Comments
                  </h2>
                </div>
                <div className='my-[15px] border-t border-[#ddd] ' />
                <div className='parent mt-[40px] grid gap-[30px]'>
                  <div
                    className='flex w-full gap-[30px]'
                    data-aos='fade-up'
                    data-aos-delay='100'
                  >
                    <div className='w-[20%] md:w-auto'>
                      <img
                        src='/assets/images/user/user-1.png'
                        alt='Lariv - React Portfolio Template'
                        className='w-[120px] rounded-full'
                      />
                    </div>
                    <div className='w-[80%] md:w-auto'>
                      <div className='flex w-full justify-between'>
                        <div>
                          <h2 className='text-[18px] font-medium text-white'>
                            Jose K. King
                          </h2>
                        </div>
                      </div>
                      <div className='mt-[10px]'>
                        <p className='text-text'>
                          We want to find out about all the other exciting
                          properties of unconventional superconductors. Our
                          software is powerful, educational and user-friendly,
                          and we hope that it will help generate new
                          understanding and suggest entirely new applications
                          for these unexplored superconductors
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='flex w-full gap-[30px]'
                    data-aos='fade-up'
                    data-aos-delay='100'
                  >
                    <div className='w-[20%] md:w-auto'>
                      <img
                        src='/assets/images/user/user-2.png'
                        alt='Lariv - React Portfolio Template'
                        className='w-[120px] rounded-full'
                      />
                    </div>
                    <div className='w-[80%] md:w-auto'>
                      <div className='flex w-full justify-between'>
                        <div>
                          <h2 className='text-[18px] font-medium text-white'>
                            Rock Sendro
                          </h2>
                        </div>
                      </div>
                      <div className='mt-[10px]'>
                        <p className='text-text'>
                          We want to find out about all the other exciting
                          properties of unconventional superconductors. Our
                          software is powerful, educational and user-friendly,
                          and we hope that it will help generate new
                          understanding and suggest entirely new applications
                          for these unexplored superconductors
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-[60px]'>
                  <div data-aos='fade-up' data-aos-delay='100'>
                    <h2 className='text-[22px] font-semibold text-white'>
                      Post a Comment
                    </h2>
                    <p className='mt-[2px] text-text'>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <div className='mt-[20px]'>
                      <div className='grid w-full gap-[20px] md:flex'>
                        <div className='md:w-1/2'>
                          <input
                            className='block w-full rounded-lg border  bg-transparent px-[15px] py-[10px]  text-white focus:outline-none '
                            type='text'
                            placeholder='Full Name:'
                          />
                        </div>
                        <div className='md:w-1/2'>
                          <input
                            className='block w-full rounded-lg border  bg-transparent px-[15px] py-[10px]  text-white focus:outline-none '
                            type='text'
                            placeholder='Your Email:'
                          />
                        </div>
                      </div>
                      <div className='mt-[20px]'>
                        <textarea
                          placeholder='Write your Comment here:'
                          name=''
                          id=''
                          cols={30}
                          rows={16}
                          className='block w-full rounded-lg border  bg-transparent px-[15px] py-[10px]  text-white focus:outline-none '
                          defaultValue={""}
                        />
                      </div>
                      <div>
                        <div className='mb-6 mt-[20px] flex items-start'>
                          <div className='flex h-5 items-center'>
                            <input
                              id='remember'
                              aria-describedby='remember'
                              type='checkbox'
                              className=' h-4 w-4 rounded  bg-btn '
                            />
                          </div>
                          <div className='ml-3 text-sm'>
                            <label
                              htmlFor='remember'
                              className='font-medium text-text'
                            >
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className='mb-[30px]'>
                        <button className='btn'>Post Comment</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsComponent;
