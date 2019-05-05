# Test ReactNative solución

Teniendo la solución de react-native-challenge en nuestra posesión, se debe proceder mediante los siguientes pasos para dar uso de la aplicación react native:

 1) Debemos abrir nuestra Terminal y proceder a instalar Expo:

    a) npm install -g expo-cli

 2) Una vez nuestra instalación de Expo haya terminado, debemos dirigirnos a la ruta donde está nuestra    carpeta con el proyecto react-native-challenge. Ejemplo:

     a)$ cd desktop/react-native-challenge

 3) Luego de posicionarnos dentro de la carpeta del proyecto, debemos iniciar el servidor de desarrollo de Expo, para esto ingresamos el siguiente comando:

     a) npm start

 4) Si todo el proceso anterior resultó con éxito, debería abrirse una ventana del navegador mostrando la interfaz del servidor de desarrollo de Expo, a continuación se expone una imagen :

  ## interface Expo

  ![photo_1.png](https://github.com/Blmendoza94/react-native-challenge/blob/master/images_readme/photo_1.png)

 5) Ahora tenemos a Expo ejecutándose en nuestra computadora, con esto ya podemos empezar a utilizar nuestra aplicación React Native, para esto debemos poseer algún emulador de dispositivos móviles, ya sea android o iOS, en caso de no tener ninguno , más adelante se explicará cómo probar el proyecto en un dispositivo real.

 6) Tomando en cuenta que se posee un emulador, procedemos a ejecutar react-native-challenge una vez tengamos encendido nuestro dispositivo virtual, si no lo hemos hecho antes, este es el momento de realizar esta acción.

 7) Con nuestro emulador ya funcionando debemos ir a la interfaz del servidor Expo, estando ahí veremos una opción que dice "PRODUCTION MODE", esta viene acompaña con un botón a su costado derecho, este debe estar encendido y de color morado, si no esta de esta forma, procedemos a dejarlo en este estado.

 8) Con el botón "PRODUCTION MODE" encendido, debemos ir a los botones que están más abajo, en este caso son tres, el primero es la opción de ejecutar el proyecto mediante "Tunnel", la segunda es "LAN", y la tercera "LOCAL", en nuestro caso dejaremos este botón en la opción "Tunnel", esto debido a que es la que ofrece el mejor rendimiento para la ejecución de nuestra aplicación. En caso de no obtener un buen rendimiento con esta opción, podemos ir probando con las dos siguientes o en un último recurso realizar la ejecución en un dispositivo real.

 9) Una vez tengamos seleccionada una de las tres opciones expuestas anteriormente, procedemos a ejecutar la aplicación React Native, para esto debemos seleccionar entre "Run on Android device/Emulator" o "Run on iOS emulator", si todo sale bien hasta este punto, ya podríamos estar disfrutando de nuestra aplicación, en caso de no ser así, reintentar nuevamente los pasos anteriores o en último caso realizar las consultas pertinentes para yo poder brindar la ayuda necesaria.

 10) Un último punto y no menos importante, es destacar que la primera instalación de la aplicación en nuestro emulador iOS, abrirá una pantalla de Expo exponiendo distintas funcionalidades y detalles de este software, por lo mismo basta con cerrar esta pantalla y debiese aparecer nuestra aplicación, a continuación se expone la pantalla indicada que puede aparecer durante nuestra primera ejecución:

 ## Pantalla iOS

 ![screen_init_ios.png](https://github.com/Blmendoza94/react-native-challenge/blob/master/images_readme/screen_init_ios.png)

 11) Por otro lado y dando paso a la explicación de la ejecución en un dispositivo real, debiéramos proceder mediante los siguientes paso:

     a) ir y presionar la opción de Expo con la etiqueta "Send link with email", haciendo esto se nos solicitara nuestro email, debemos ingresarlo y presionar en "send";

     b) una vez presionado "send" nos llegará un correo electrónico a nuestro email el cual posee una URL para descargar expo y otra que contiene nuestro proyecto, en este caso si es la primera vez que ejecutamos la aplicación, deberíamos seleccionar la opción que dice "Download Expo for Android at http://bit.ly/2bZq5ew or iOS at http://apple.co/2c6HMtp", es decir aquella que corresponda para nuestro dispositivo móvil;

     c) Una vez se realice la instalación de "Expo en nuestro dispositivo móvil", procedemos a ir nuevamente al email recibido y en este caso seleccionamos el link "https://expo.io/--/to-exp/exp%3A%2F%2Fzt-vui.anonymous.react-native-challenge.exp.direct%3A80"

  Si todo se realizo correctamente, debiesen comenzar a instalarse las dependencias de nuestra aplicación además de ejecutarse la misma, por lo cual ahora ya podremos disfrutar de react-native-challenge en los distintos dispositivos ya sean iOS o Android.

  12) Una última opción de realizar la instalación de la aplicación en nuestro dispositivo real, es mediante el escaneo del código QR que expone "Expo" en su interfaz gráfica, es correcto destacar que este código varía en función de si queremos ejecutarlo mediante "Tunnel", "LAN" o "Local", así que debemos evaluar la opción que nos seas más conveniente para ejecutar la aplicación mediante esta modalidad.

  IMPORTANTE: Todas las ejecuciones deben tener el botón "PRODUCTION MODE" encendido.

  CONSEJO: Si estamos desde un Mac, es una buena alternativa usar los emuladores de Xcode, ya que ofrecen un excelente rendimiento para realizar la prueba de la aplicación.
