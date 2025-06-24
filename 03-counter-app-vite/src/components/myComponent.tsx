import './myComponent.css'



//Fragment nos ayuda a resolver el problema del contenedor Padre que es obligatorio

//<> </> le dice a React que es un Fragment
    const newMesg="Variable JavaSCript";
    const arrayObj=[{name:"pepe",age:20},{name:"Maria",age:16}];

    const getSuma=(a:number,b:number)=>{
        return a+b;
    }

    interface Props {
        name: string;
        title: string;
        secretNum?: number;
    };


export const MyComponent = ({name, title, secretNum}: Props) => {




    return (
        <> 
            <h1 className="customText">{title}</h1>
            <h2>Name: {name}</h2>
            <h2>Secret Num:{secretNum}</h2>
            <p>Esto es un parrafo</p>
            <h2>{getSuma(7,5)}</h2>
            <h3>{newMesg}</h3>

    {arrayObj.map((element, index) => (
      <div key={index}>{element.name} - {element.age}</div>
    ))}
        </>
    );
};
