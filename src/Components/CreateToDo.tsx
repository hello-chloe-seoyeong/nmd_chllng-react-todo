import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";
import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setToDos((oldTodo) => [
      { text: toDo, id: Date.now(), category },
      ...oldTodo,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        type="text"
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="What are you gonna do?"
      />
      <button>Add</button>
    </form>
  );
}
export default CreateToDo;
