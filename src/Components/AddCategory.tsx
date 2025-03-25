import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { customCategoryState } from "../atoms";

interface ICateForm {
  cate: string;
}
function AddCategory() {
  const { register, handleSubmit, setValue } = useForm<ICateForm>();
  const [custom, setCustom] = useRecoilState(customCategoryState);
  const onValid = ({ cate }: ICateForm) => {
    setCustom((prev) => [...prev, cate]);
    setValue("cate", "");
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        type="text"
        {...register("cate", {
          required: "If you want to create a new category, write it.",
        })}
      />
      <button>Create Category</button>
    </form>
  );
}

export default AddCategory;
