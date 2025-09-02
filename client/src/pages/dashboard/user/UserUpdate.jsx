import { useEffect } from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import UserStore from "../../../store/UserStore";
import { useNavigate } from "react-router-dom";

const UserUpdate = () => {
  let { userReadRequest, userData, profileUpdate, logoutRequest } = UserStore();
  const navigate = useNavigate();
  useEffect(() => {
    userReadRequest();
  }, [userReadRequest]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    let res = await profileUpdate({ email, password });
    if (res) {
      let res = await logoutRequest();
      if (res) {
        navigate("/login");
      }
    }
  };

  return (
    <DashboardLayout>
      <section className='mt-[50px]'>
        <div className='container mx-auto '>
          <div>
            <div className='border border-gray-200 px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <h2 className='text-[30px] font-bold'>User profile update</h2>
              </div>

              <form
                key={userData?._id}
                onSubmit={handleSubmit}
                className='contact-form aos-init aos-animate'
                data-aos='fade-up'
                data-aos-delay={100}
              >
                <div className='mt-[30px]'>
                  <input
                    name='email'
                    className='inputBox'
                    placeholder='Email'
                    required
                    type='email'
                    defaultValue={userData?.email}
                  />
                </div>

                <div className='mt-[30px]'>
                  <input
                    name='password'
                    className='inputBox'
                    placeholder='Password'
                    required
                    type='password'
                  />
                </div>

                <div
                  className='wow fadeIn  animated mt-[30px]'
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <button className='btn'>User Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default UserUpdate;
