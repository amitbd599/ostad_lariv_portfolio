import { useEffect, useState } from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import { useNavigate, useParams } from "react-router-dom";
import BlogStore from "../../../store/BlogStore";
import { HiOutlineRefresh } from "react-icons/hi";
import ReactQuill from "react-quill-new";

const UpdateBlog = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  let [data, setData] = useState({
    title: "",
    category: "",
    img: "",
    sortDescription: "",
    description: "",
  });
  let {
    singleBlogData,
    singleBlogRequest,
    updateBlogLoading,
    updateBlogRequest,
  } = BlogStore();

  useEffect(() => {
    singleBlogRequest(id);
  }, [id, singleBlogRequest]);

  useEffect(() => {
    if (singleBlogData) {
      setData({
        title: singleBlogData.title || "",
        category: singleBlogData.category || "",
        img: singleBlogData.img || "",
        sortDescription: singleBlogData.sortDescription || "",
      });
      setValue(singleBlogData.description);
    }
  }, [singleBlogData]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    data.description = value;
    let res = await updateBlogRequest(data, id);
    if (res) {
      navigate("/get-all-blog/1");
    }
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "video",
    "background",
    "clean",
    "code",
    "align",
    "direction",
    "code-block",
  ];

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [
        {
          color: [
            "#000000",
            "#be0027",
            "#cf8d2e",
            "#e4e932",
            "#2c9f45",
            "#371777",
            "#511378",
            "#ff0000",
            "#52565e",
            "#f3f4f7",
            "#00aeff",
            "#ff4f81",
            "#2dde98",
            "#0389ff",
          ],
        },
        {
          background: [
            "#000000",
            "#ffffff",
            "#be0027",
            "#cf8d2e",
            "#e4e932",
            "#2c9f45",
            "#371777",
            "#511378",
            "#ff0000",
            "#52565e",
            "#f3f4f7",
            "#00aeff",
            "#ff4f81",
            "#2dde98",
            "#0389ff",
          ],
        },
      ],

      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
      ["link", "image", "video"],
      ["code", "clean", "code-block"],
    ],
  };
  return (
    <DashboardLayout>
      <section className='mt-[50px]'>
        <div className='container mx-auto '>
          <div>
            <div className='border border-gray-200 px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <h2 className='text-[30px] font-bold'>Update Blog</h2>
              </div>

              <form
                onSubmit={handleSubmit}
                className='contact-form aos-init aos-animate'
                data-aos='fade-up'
                data-aos-delay={100}
              >
                <div className='mt-[30px]'>
                  <input
                    name='title'
                    className='inputBox'
                    placeholder='Title'
                    required
                    type='text'
                    onChange={handleChange}
                    value={data?.title}
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='category'
                    className='inputBox'
                    placeholder='Category'
                    required
                    type='text'
                    onChange={handleChange}
                    value={data?.category}
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='sortDescription'
                    className='inputBox'
                    placeholder='Sort Description'
                    required
                    type='text'
                    onChange={handleChange}
                    value={data?.sortDescription}
                  />
                </div>
                <div className='mt-[30px]'>
                  <ReactQuill
                    theme='snow'
                    modules={modules}
                    formats={formats}
                    value={value}
                    onChange={setValue}
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='img'
                    className='inputBox'
                    placeholder='Feature Img CDN'
                    required
                    type='text'
                    onChange={handleChange}
                    value={data?.img}
                  />
                </div>
                <div
                  className='wow fadeIn  animated mt-[30px]'
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  {" "}
                  <button className='btn ' type='submit'>
                    {updateBlogLoading ? (
                      <span className='flex gap-2'>
                        <HiOutlineRefresh /> Processing
                      </span>
                    ) : (
                      <>Update Blog</>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default UpdateBlog;
