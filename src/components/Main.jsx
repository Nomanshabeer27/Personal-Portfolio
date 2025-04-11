import Left from "./Left";
import Right from "./Right";

const Main = () => {
    return (
        <><div className="relative bottom-0 left-0">

            <div className="w-full py-10  flex justify-between items-center px-10">
                <div className="w-[60%] md:flex justify-center items-center">
                    <Left />
                </div>
                <div className=" w-[50%] flex  justify-center items-center">
                    <Right />
                </div>

            </div>
        </div>


        </>
    )
}

export default Main;