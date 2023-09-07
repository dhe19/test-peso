import Form from "../components/form/Form";

const Registro = () => {
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className=" show-form w-full">
        <h1 className="text-4xl text-center font-bold my-5 uppercase">
          Ingresa Tus datos
        </h1>
        <div className="mx-auto w-11/12 lg:w-4/6 max-h-[580px] rounded-2xl shadow-2xl shadow-black/60 grid lg:grid-cols-2 overflow-hidden bg-[#2c3251]  duration-500 hover:-translate-y-1 ">
          <Form />
          <div className="bg-green-500 min-h-full hidden lg:block ">
            <img
              src="https://c0.wallpaperflare.com/preview/225/445/284/mexico-ciudad-de-mexico-soumaya-museum.jpg"
              className=" object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
