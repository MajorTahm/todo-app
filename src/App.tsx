import { useContext } from "react";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import CreateCategory from "./components/CreateCategory/CreateCategory";
import CreateTaskForm from "./components/CreateTaskForm/CreateTaskForm";
import Modal from "./components/Modal/Modal";
import TasksList from "./components/TasksList/TasksList";
import { AppContext } from './context/appContext'



function App() {

  const {
    modalState,
    filter,
    closeModal,
  } = useContext(AppContext)

  return (
    <section className="Main flex justify-center w-screen h-screen p-20">
      {modalState && <Modal title='Create new category' onClose={closeModal}>
        <CreateCategory />
      </Modal>}
      <div className="flex relative max-w-4/5">
        <div className="Sidebar flex-[30%]  h-full pt-32 justify-center pr-8
        ">
          <CategoriesList />
        </div>
        <div className="TaskSection flex-[70%] border-l pt-[5vh] pl-8">
          <h1 className=" font-bold text-5xl mb-6">{filter}</h1>
          <CreateTaskForm />
          <TasksList />
        </div>

      </div>
    </section>
  );
}

export default App;
