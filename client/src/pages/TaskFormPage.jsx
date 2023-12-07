import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from '../api/task.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-hot-toast";


export function TaskFormPage() {
  
  // Usando las funciones de react-hook-form, muestro el estado del formulario, y errors se ira llenanado si existe algun error
  // Funciones que ire utilizando en el codigo 
  const { register, handleSubmit,formState: {errors}, setValue } = useForm();

  // creamos un objeto para navegar
  const navigate = useNavigate();
  const params = useParams();
  //console.log(params); para el condicional de ver el boton en cuando le de click a una tarea ya creada mas no a una que apenas voy a crear y no existe

  const onSubmit = handleSubmit(async data =>{
    if (params.id){
     await updateTask(params.id, data)
     toast.success('Tarea Actualizada',{
      position: "bottom-right",
      style: {
        background: "#101010",
        color: "#fff"
      },
    });
    }else{
      await createTask(data);
      toast.success('Tarea Creada',{
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff"
        },
      });
    }
    navigate('/tasks');
  });


  useEffect(() =>{
    async function loadTask() {
      if(params.id){
        const {data: {title, description}} = await getTask(params.id);
        // Obtenemos los datos cons la funcion getTask y estando los datos en la consola
        // se los asignamos a los nombres de los inputs
        setValue('title', title);
        setValue('description',description);
      }
    }
    loadTask();
  }, []); 

  // Usando el hook de registrar que nos proporciona react
  return (
    <div className='max-w-xl mx-auto'>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
        />
        {errors.title && <span>this field is required</span>}
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
        ></textarea>
        {errors.description && <span>this field is required</span>}
        <button
        className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'
        >Save</button>
      </form>

      {params.id && (
        <div className='flex justify-end'>
        <button
        className='bg-red-500 p-3 rounded-lg w-48 mt-3'
          onClick={async () => {
            const accepted = window.confirm("are you sure?");
            if (accepted) {
              await deleteTask(params.id);
              toast.success('Tarea Eliminada',{
                position: "bottom-right",
                style: {
                  background: "#101010",
                  color: "#fff"
                },
              });
              navigate("/tasks");
            }
          }}
        >
          Delete
        </button>
        </div>
      )}
    </div>
  );
}
