import { HiOutlineRefresh } from "react-icons/hi";
import UserStore from "../store/UserStore";
import { useNavigate } from "react-router-dom";
const LoginComponent = () => {
  const navigate = useNavigate();
  let { loginUserRequest, loginLoading } = UserStore();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    let res = await loginUserRequest({ email, password });
    if (res) {
      navigate("/dashboard");
    }
  };
  return (
    <section className=' h-[100vh] flex items-center justify-center'>
      <div className='container mx-auto '>
        <div className='grid grid-cols-12 gap-[30px] items-center'>
          <div className='col-span-6'>
            <div>
              <img src='/assets/images/login.png' alt='' />
            </div>
          </div>

          <div className='col-span-6  '>
            <div className='border border-theme px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <img src='/assets/images/logo.svg' alt='' />
              </div>

              <form
                onSubmit={handleSubmit}
                className='contact-form aos-init aos-animate'
                data-aos='fade-up'
                data-aos-delay={100}
              >
                <div className='mt-[30px]'>
                  <input
                    name='email'
                    className='inputBox'
                    placeholder='Enter Email'
                    required
                    type='text'
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    className='inputBox'
                    placeholder='Enter Password'
                    required
                    type='password'
                    name='password'
                  />
                </div>
                <div
                  className='wow fadeIn  animated mt-[30px]'
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <button className='btn ' type='submit'>
                    {loginLoading ? (
                      <span className='flex gap-2'>
                        <HiOutlineRefresh /> Processing
                      </span>
                    ) : (
                      <>Login</>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;
