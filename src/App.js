import './App.css';
import Testimonio from './components/Testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonio
        nombre='Shawn Lorem '
        pais='USA'
        imagen='shawn'
        extension='webp'
        cargo='Ingeniero de software'
        empresa='Amazon'
        testimonio='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores aspernatur quidem dolor deleniti iste perferendis harum. Deserunt autem sint deleniti ut voluptate dolor, velit omnis quaerat reprehenderit ab voluptatem soluta saepe quis commodi dolore totam eius ullam provident libero culpa asperiores. Sed atque, quia dignissimos dolorem quibusdam voluptas repudiandae vitae consequatur, facilis velit sunt dolorum quis. Consectetur, laborum adipisci. <b>Non est, ad magni a libero sequi accusamus fugiat odio voluptatum</b>.' />
      <Testimonio
        nombre='Emma Bostian'
        pais='Suecia'
        imagen='emma'
        extension='webp'
        cargo='Ingeniera de software'
        empresa='Spotify'
        testimonio= 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. <strong>Dolores aspernatur quidem dolor deleniti iste perferendis harum</strong>. Deserunt autem sint deleniti ut voluptate dolor, velit omnis quaerat reprehenderit ab voluptatem soluta saepe quis commodi dolore totam eius ullam provident libero culpa asperiores. Sed atque, quia dignissimos dolorem quibusdam voluptas repudiandae vitae consequatur, facilis velit sunt dolorum quis. Consectetur, laborum adipisci. Non est, ad magni a libero sequi accusamus fugiat odio voluptatum.' />
      <Testimonio
        nombre='Sarah Chima '
        pais='Nigeria'
        imagen='sarah'
        extension='jpg'
        cargo='Ingeniera de software'
        empresa='Chatdesk'
        testimonio='<b>Lorem ipsum dolor sit, amet consectetur adipisicing elit</b>. Dolores aspernatur quidem dolor deleniti iste perferendis harum. Deserunt autem sint deleniti ut voluptate dolor, velit omnis quaerat reprehenderit ab voluptatem soluta saepe quis commodi dolore totam eius ullam provident libero culpa asperiores. Sed atque, quia dignissimos dolorem quibusdam voluptas repudiandae vitae consequatur, facilis velit sunt dolorum quis. Consectetur, laborum adipisci. Non est, ad magni a libero sequi accusamus fugiat odio voluptatum.' />
      </div>
    </div>
  );
}

export default App;