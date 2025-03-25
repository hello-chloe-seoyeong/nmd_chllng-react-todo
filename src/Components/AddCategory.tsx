import { useForm } from "react-hook-form";

interface ICateForm {
  cate: string;
}
function AddCategory() {
  const { register, handleSubmit } = useForm();
  const onValid = ({ cate }: ICateForm) => {
    return true;
  };
  return (
    <form>
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
