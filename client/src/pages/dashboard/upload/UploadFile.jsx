import { useState } from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import { ErrorToast } from "../../../helper/helper";
import FileStore from "../../../store/FileStore";
import { HiOutlineRefresh } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const UploadFile = () => {
  const [imagePreview, setImagePreview] = useState("");
  let [rowFile, setRowFile] = useState(null);
  let { uploadFileRequest, uploadFileRequestLoading } = FileStore();
  const navigate = useNavigate();

  //! Image upload
  const readURL = (input) => {
    const file = input.target.files && input.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
      setRowFile(file);
    }
  };

  let fileUploadFun = async () => {
    if (!rowFile) {
      ErrorToast("Please select a image file");
      return;
    }
    const formData = new FormData();
    formData.append("file", rowFile);
    let res = await uploadFileRequest(formData);

    if (res) {
      navigate("/get-all-file");
    }
  };

  return (
    <DashboardLayout>
      <section className='mt-[50px]'>
        <div className='container mx-auto '>
          <div>
            <div className='border border-gray-200 px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <h2 className='text-[30px] font-bold'>Upload File</h2>
              </div>

              <div className='flex items-center justify-center w-full'>
                <label
                  htmlFor='dropzone-file'
                  className='flex flex-col items-center justify-center w-full h-[500px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
                >
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    {imagePreview ? (
                      <div>
                        <img
                          src={imagePreview}
                          alt='preview'
                          className='h-40 object-contain rounded-md'
                        />
                        <div
                          className='wow fadeIn  animated mt-[30px]'
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <button className='btn ' onClick={fileUploadFun}>
                            {uploadFileRequestLoading ? (
                              <span className='flex gap-2'>
                                <HiOutlineRefresh /> Processing
                              </span>
                            ) : (
                              <>update Service</>
                            )}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <svg
                          className='w-10 h-10 mb-3 text-gray-400'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                          />
                        </svg>
                        <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                          <span className='font-semibold'>Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </>
                    )}
                  </div>
                  <input
                    id='dropzone-file'
                    type='file'
                    accept='.png, .jpg, .jpeg'
                    className='hidden'
                    onChange={readURL}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default UploadFile;
