# backend FoodExplorer  

### últimos updates:

#### commit "Refactor: Improved Rendering Logic and UI Enhancement"

- Página Hume:
    O método de renderização do componente Section foi alterado. Agora, o array de categorias é extraído dos próprios produtos recebidos da função fetchAllFood(), dispensando uma chamada à API apenas para recuperar as categorias.

- Página OrdersHistory:
    Agora, caso não haja nenhum pedido no histórico, a tabela ou o card não são renderizados, e aparece uma mensagem escrita "Nenhum pedido no histórico" no centro da página.

- Componente FoodCard:
    Agora, a chamada à API para buscar produtos marcados como favoritos só acontece para o usuário comum, evitando a chamada quando o usuário é um administrador, já que administradores não têm acesso às funções de "produtos favoritos".

- Componente Logo:
    O componente agora apresenta a exibição correta do indicador de usuário administrador também na versão desktop. O estilo do componente foi retrabalhado, dispensando a lógica de adição do span "admin" do componente Header.


### Introdução:  


#### projeto FoodExplorer #### 


- A ideia do projeto é testar e concretizar os conhecimentos passados durante o curso.  

- O projeto consiste em desenvolver um cardápio digital para um restaurante fictício chamado FoodExplorer.  

- A aplicação tem o proposito de apresentar os pratos, montar um carrinho e efetuar o pagamento(ficticil) dos itens selecionados  

- A aplicação tem como base dois perfis de usuário: o usuário adm(que no momento se aplica apenas ao primeiro cadastro de usuário realizado na plataforma, usuário de id 1) e o usuário comum que seria o "comprador"  

Este repositório especifico se trata do frontend, uma aplicação react que consumirá uma api para seu funcionamento completo.  

### Requisitos:   

#### bibliotecas/dependências 

- axios: ^1.5.0 

- qrcode: ^1.5.3 

- react: ^18.2.0 

- react-dom: ^18.2.0 

- react-router-dom: ^6.15.0 

- styled-components: ^6.0.7 

Dev Dependencies: 

- @types/react: ^18.0.37 

- @types/react-dom: ^18.0.11 

- @vitejs/plugin-react: ^4.0.0 

- eslint: ^8.38.0 

- eslint-plugin-react: ^7.32.2 

- eslint-plugin-react-hooks: ^4.6.0 

- eslint-plugin-react-refresh: ^0.3.4 

- vite: ^4.3.9 


nessas versões ou superiores. 


#### extensões:  

  -  vscode-styled-components  

 
### Instruções de uso:  


#### instalação das bibliotecas: 

lançar no console o comando 

    npm i  

#### inicialização de app no ambiente de desenvolvimento  

lançar no console o comando para iniciar o servidor local  

    npm run dev  

### styles

#### global.js

Este é o arquivo de estilização global da aplicação, as alteraçãos CSS feitas aqui refletem em todo o app(elas podem e em alguns casos são sobrescritas em outras partes do código).

#### theme.js

Este é o arquivo onde são armazenadas as variaveis de estilo padrão da aplicação.

exemplo de uso de variavel: 

        color: ${({theme}) => theme.COLORS.Light_100};


### auth.jsx 

É o contexto que busca e armazena as informações do usuário, o token de validação além do carrinho de compras e suas funções.

 

#### signIn/signOut 

 

- Função signIn: 

 

    Recebe como parâmetro as informações de email e senha para tentativa de login e as envia para a a api através da rota '/sessions'. caso bem-sucedida e os dados aprovados pela api, a api retorna todas as informações do usuário e o token especifico para essa sessão, ainda nesta função estes dados são armazenados no localStorage do navegador do usuário. estas informações serão buscadas pela aplicação em outros momentos.

 

- Função signOut: 

 

    Remove do localStorage todas as informações cadastradas, tornando impossível a verificação e autenticação do usuário e, com exceção das telas de login e signIn,  bloqueando o acesso a aplicação. 

 

#### cart 

Ao carregar da pág*ina é feita a tentativa de recuperação de cart que é a variável que armazena as informações do carrinho, caso a busca no localStorage falhe o carrinho é definido como um array vazio.

 

- Definição de item  

    Um item do carrinho consiste em um objeto com as seguintes propriedades: 


        { 

            name: , 

            quantity: Number(), 

            price: , 

            total_price(numberPrice *Numb()), 

            img: , 

            id 

        } 

 

- Função addToCart: 

    Recebe como parâmetro o item a ser adicionado ao carrinho. Através da variável "existingItemIndex", busca no carrinho por itens que possuam o mesmo ID do item fornecido como parâmetro. A partir disso, a variável é utilizada para, caso o item já exista no carrinho, apenas a propriedade de quantidade do item já existente seja alterada, evitando a existência de itens duplicados na lista. Caso não haja um item com o mesmo ID, o item é adicionado ao carrinho e o localStorage é atualizado. 

 

- Função removeFromCart: 

    Recebe como parâmetro o item a ser removido do carrinho. Através do método filter, transformar a variável que armazena o carrinho num array novo que contém todos os itens menos o cujo ID seja igual ao do fornecido como parâmetro e o localStorage é atualizado. 

 

- Função clearCart: 

    Define a variável que armazena o carrinho num array vazio e atualiza o localStorage. 

 

- Função pay: 

    payment é o useState que é exportado e utilizado em outras partes da aplicação para informar o status do pagamento. 

    Recebe como parâmetro a forma de pagamento na variável paymentMethod. Na variável cartValue armazena a toma do valor das propriedades total_price de todos os itens da lista, este valor passa pelo método toFixed(2) para uma formatação mais adequada do valor armazenado.  

    Em seguida é criado o objeto data que leva as propriedades paymentMethod, cartValue e order que leva a lista de itens do carrinho. payment é definido paea "1". 

    O objeto data, numa requisição, é enviado para a api na rota "/orders" e um setInterval é iniciado buscando na rota "/orders/orderstatus" o status do pedido a cada 1 segundo. 

        status = "Pendente": payment é definido paea "1".; 

        status = "Preparando": payment é definido paea "2".;

        status = "Entregue": payment é definido paea "3" e a busca é interrompida. 

### componentes:  

- Alert 

    Este componente é usado para passar alertas mais estilizados para o usuário. depende de três parâmetros, três useStates e 1 useEffect para o funcionamento, sendo os useStates e useEffect implementados no local de aplicação. a função showAlert() é usada também no local de utilização do componente para alterar os dados dos useStates. 

    useStates:  

    Para indicar para o componente que ele deve se tornar visível.

         const [alert, setAlert] = useState(false) 

    State para informar o tipo de alerta. como padrão recebe uma string para alterar a cor de fundo. recebe "nice" para o background verde ou "bad" para um background vermelho. outras cores podem ser facilmente adicionadas no estilo do componente. 

         const [alertType, setAlertType] = useState("error") 

 

    state utilizado para passar para o componente a mensagem a ser exibida 

         const [AlertMessage, setAlertMessage] = useState("") 

    useEffect: 

        useEffect(() => { 

        let timeoutId; 

        if (alert) { 

          timeoutId = setTimeout(() => {setAlert(false);}, 2000);} 

        return () => clearTimeout(timeoutId); 

        }, [alert]); 

 

    A partir da alteração do useState "alert" inicia um setTimeout de 2 segundos que é o tempo referente a aparição da mensagem a ser alertada, após o tempo o useState "alert" é definido para false novamente para que o alerta possa ser exibido de novo.

     

    exemplo de disparo de alerta  

 

        showAlert("O prato precisa de um nome", "bad") 

 

        showAlert("Prato atualizado com sucesso!", "nice") 

 

- Button  

 

    Um botão simples que recebe através da propriedade title o conteudo do botão. ele também pode receber um ícone pela propriedade icon e ele pode ser desabilitado usando a propriedade loading, possui também a propriedade ...rest que possibilita a adição de novas propriedades direto no local de aplicação do componente.

    exemplo de aplicação do componente: 

        <Button className="order" icon={Icon_Receipt} onClick={handleAddButton} title={"Adicionar"}/> 

 

- Card  

    É um componente "cartaz" utilizado na página Home que exibe uma imagem, um título e um texto através das propriedades imageSrc, title e description. possui background e ocupa 100% da largura disponível. 

    exemplo de aplicação do componente: 

        <Card  

            imageSrc={cardImg} 

            title="Sabores inigualáveis" 

            description="Sinta o cuidado dpreparo com ingredienteselecionados." 

        /> 

- Counter  

    Este componente é um contador visual para a quantidade de alimentos (ou "foods"). O componente inclui um componente de número (Number), e botões de ícone (IconButton) para aumentar ou diminuir a quantidade de alimentos. 

    O componente aceita duas propriedades: 

    foods: Representa a quantidade atual de alimentos. Esta é a propriedade que será alterada quando os botões de aumento ou diminuição forem clicados. 

    onFoodsChange: É uma função de retorno de chamada que será invocada quando a quantidade de alimentos for alterada. Ela recebe o novo valor como argumento. 

    O componente possui duas funções, handlePlusButton e handleMinusButton, que são chamadas quando os botões de aumento e diminuição são clicados, respectivamente. A função handlePlusButton incrementa a quantidade de alimentos chamando a função onFoodsChange com o valor atual mais um. A função handleMinusButton decrementa a quantidade de alimentos, mas apenas se a quantidade atual for maior que zero. 

    A variável formattedFoods é usada para garantir que a quantidade de alimentos exibida sempre tenha dois dígitos, adicionando um zero à esquerda se necessário. 

    Exemplo de aplicação do componente: 

        <Counter foods={foodsValue} onFoodsChange={handleFoodsValueChange}/> 

    Neste caso, foodsValue, que é um estado (useState), está definido como 1, que é o valor inicial do contador para esta aplicação. A função handleFoodsValueChange é responsável por atualizar o estado no local de aplicação com os valores retornados pelo componente: 

    Função para lidar com a mudança na quantidade de alimentos 

        function handleFoodsValueChange(newValue) { 

                setFoodsValue(newValue); 

        } 

   Dessa forma, ao utilizar o componente Counter, a função handleFoodsValueChange será chamada quando houver alterações na quantidade de alimentos, e o estado foodsValue será atualizado com os novos valores retornados pelo componente. 

- FoodCaerd 

    Este componente representa um cartão de comida. Ele é utilizado para exibir informações sobre de produto, como imagem, título, descrição, preço e oferece funcionalidades como adicionar ao carrinho, adicionar à lista de favoritos e caso o usuário seja um administrador, redirecionamento para a pagina de edição do produto. 

    Props: 

    imageSrc: A fonte da imagem que será exibida no cartão. 

    title: O título ou nome da comida. 

    description: A descrição do produto alimentício. 

    price: O preço do produto alimentício. 

    id: O identificador único do produto alimentício. 

    onImageClick: Uma função de callback para lidar com cliques na imagem. 

    UseStates: 

    foodsValue: Estado que armazena a quantidade de alimentos selecionada no contador. 

    likeIcon: Estado que controla se o ícone de coração está preenchido (indicando que o produto está na lista de favoritos). 

    likeds: Estado que armazena a lista de produtos marcados como favoritos. 

    Funções: 

    handleLikeButton: Função assíncrona para lidar com cliques no botão de favoritos. Envia requisições à API para adicionar ou remover o produto da lista de favoritos. 

    handleEditButton: Função para redirecionar o usuário para a página de edição do produto. 

    handleFoodsValueChange: Função para atualizar o estado foodsValue com a quantidade selecionada no contador. 

    handleAddButton: Função para adicionar o produto ao carrinho com base na quantidade selecionada. 

    UseEffects 

    fetchLikeds: useEffect para buscar na api os produtos marcados como favoritos ao montar o componente. 

 

    likeds.forEach: useEffect para atualizar o estado likeIcon com base nos produtos marcados como favoritos. 

 

    Exemplo de aplicação do componente: 

 

        {filteredFoods.map((filteredFood, foodIndex) => ( 

          <FoodCard 

            key={foodIndex} 

            like={0} 

            imageSrc={`${api.defaults.baseURL}/files/${filteredFood.img}`} 

            title={`${filteredFood.name} >`} 

            description={filteredFood.descriptions} 

            price={`R$ ${filteredFood.price}`} 

            id={filteredFood.id} 

            onImageClick={() => handleDetails(filteredFood.id)} 

            foodImg={filteredFood.img} 

            foodName={filteredFood.name} 

          /> 

        ))} 

 
- Footer 

    Este componente é um Footer (rodapé) que representa a parte inferior da página. Ele é um componente fixo, não dinamico responsável por exibir informações de identificação e direitos autorais. Com exeção das páginas de login e signup, ele está presente em todas as páginas.  

    exemplo de aplicação do componente: 

        <Container> 

            ... 

            <Footer/> 

        </Container> 

- Header  

    Este é o cabeçalho da aplicação é um componente dinamico e bastante versatíl. Está em quase todas as telas da aplicação 

    Para o usuário comum no desktop: 

    Apresenta o logo da aplicação também responsável por, quando clicado redirecionar o usuário para a página Home; 

    uma barra de pesquisa que realiza busca no bancode dados da api por produtos com o nome igual a pesquisa digitada ou produtos que ternham ingredientes com o nome igual a pesquisa digitada; 

    um botão texto para redirecionar o usuário para os seus produtos marcados com "favoritos"  

    um botão texto para redirecionar o usuário para o seu historico de pedidos do usuário  

    um botão para redirecionar o usuário para o seu carrinho de compras, este botão tambem indica a quantidadde de itens que ja estão no carrinho 

    um botão para logout, para desconectar e fiinalizar a sessão do usuário 

    para o usuário comum em mobile: 

    logo da aplicação também responsável por, quando clicado redirecionar o usuário para a página Home;

    um icone para acionamento da barra lateral que apresenta barra de pesquisa e botões para historico de pedidos, produtos marcados como favoritos e finalizar sessão 

    para o usuário administrador no desktop: 

    apresenta o logo da aplicação também responsável por, quando clicado redirecionar o usuário para a página Home; 

    uma barra de pesquisa que realiza busca no bancode dados da api por produtos com o nome igual a pesquisa digitada ou produtos que ternham ingredientes com o nome igual a pesquisa digitada; 

 

    um botão texto para redirecionar o usuário para o historico de pedidos de todos os usuários; 

 

    um botão para redirecionar o usuário para a página de cadastro de um novo produto;  

 

    um botão para logout, para desconectar e fiinalizar a sessão do usuário. 

    para o usuário administrador em mobile: 

    logo da aplicação com identificação de usuário adm também responsável por, quando clicado redirecionar o usuário para a página Home; 

    um icone para acionamento da barra lateral que apresenta barra de pesquisa e botões para cadastro de um novo produto,  historico de pedidos feitos por todos os usuários e finalizar sessão 

    exemplo de aplicação do componente: 

        <Container> 

         <Header/> 

         ... 

        </Container> 


- IconButton  

    É um botão para ícones, a diferenciação se dá pelo fado de, por padrão, não possuir background. 

    Recebe os props title e icon sendo title para conteudo em texto e icon para o icone 

    exemplo de aplicação do componente: 

        <IconButton className="backButton" onClick={() => goBack()} icon={Icon_Left_Arrow} title="Voltar" 

        /> 

- Icons  

    É uma biblioteca que armazena e exporta todos os ícones usados na aplicação  

    exemplo de aplicação de componente:  

    importação: 

 

        import { Icon_Left_Arrow, Icon_Upload, Icon_Done } from "../../../components/Icons" 

    uso: 

        <IconButton className="backButton" onClick={goBack} icon={Icon_Left_Arrow} title="Voltar"/> 

- Input  

    Um imput que possui no mesmo componente um prop title que define um título para o imput informando para que servirá o dado a ser inserido. além disso é possível pelo prop Icon adicionar um ícone que ficara a esquerda, "dentro do imput". 

    exemplo de aplicação de componente:       

            <Input  

            title={"Nome"} 

            placeholder="Ex.: Salada Ceasar" 

            defaultValue={food.name} 

            onChange={e => setName(e.target.value)} 

            />  

- Logo 

    Este componente é basicamente a logo da aplicação, faz através do contexto useAuth a diferenciação de usuário comum e usuário administrador para caso adm, adicionar ao lado da logo sua identificação 

    exemplo de aplicação de componente:    

        <IconButton onClick={() => navigate("/")} icon={Logo}/> 

- NavBar 

    Este componente é uma NavBar (barra de navegação) que fornece um menu de navegação lateral. Usa o contexto useAuth para receber informações de autenticação, como dados do usuário e funções para logOut. 

    Quando aberto, o menu lateral apresenta uma barra de pesquisa que realiza busca no banco de dados da api por produtos com o nome igual a pesquisa digitada ou produtos que tenham ingredientes com o nome igual a pesquisa digitada e uma lista de botões de texto para: 

    usuário comum: 

    histórico de pedidos do usuário, produtos que o usuário marcou como "favoritos" e logOut 

    usuário administrador: 

    cadastro de novo produto, historico de pedidos de todos os usuários e logOut 

    UseStates: 

    isOpen: useState que rastreia se a barra lateral está aberta ou fechada. 

    Funções: 

    toggleSidebar: Função para alternar entre abrir e fechar a barra lateral. 

    handleSignOut: Função para realizar o logout do usuário. 

    exemplo de aplicação de componente:    

        <Mobile> 

            <NavBar/> ... 

        </Mobile> 

 

    Neste caso, </Mobile> é apenas um componente local de div para controlar a aparição via estilo do menu lateral e outros componentes presentes nesta aplicação.  

- Pay 

    Este componente oferece uma interface interativa para o usuário escolher o método de pagamento desejado, inserir informações do cartão de crédito e visualizar o status do pagamento. O componente também inclui a capacidade de pagar com Pix, exibindo um código QR dinâmico.  

    utiliza dos dados de screenCart e payment importados do contexto useAuth para capturar os dados do carrinho e renderização de telas  

    UseStates: 

    selectedButton: useState que rastreia o método de pagamento selecionado (pix ou cartão). 

    qrCodeURL: useState que armazena a URL do código QR gerado para pagamentos via pix. 

    cartValue: useState que armazena o valor total do carrinho de compras. 

    cardNumber, expiry, e cvc: useStates que armazenam as informações do cartão de crédito inseridas pelo usuário. 

    Funções: 

    handleCardNumberChange, handleExpiryChange, handleCvcChange: Funções que formatam as informações do cartão de crédito conforme o usuário digita. 

    handleSelected: Função que altera o estado selectedButton quando um método de pagamento é selecionado. 

    handlePayButton: Função que monta um objeto com as informações do cartão de crédito e direciona esse objeto como parâmetro da função pay importada do contexto useAuth. 

    a área de pagamento exibe diferentes conteúdos com base nos estados selectedButton e payment importado e gerenciado pelo contexto useAuth: 

    Se payment for 0 e selectedButton "pix", exibe um código QR dinamico que simula um pagamento via pix e, quando lido, informa ao leiotor o valor referente ao total da soma dos itens do carrinho. 

    Se payment for 0 e selectedButton "cartão", exibe um formulário de entrada de informações do cartão de crédito. 

    Se payment for 1 exibe 0 status de pagamento "Aguardando pagamento no caixa" com um ícone correspondente (Icon_Clock). 

    Se payment for 2 exibe 0 status de pagamento "Pagamento aprovado!" com um ícone correspondente (Icon_Check). 

    Se payment for 3 exibe 0 status de pagamento "edido entregue!" com um ícone correspondente (Icon_Fork). 

    exemplo de aplicação de componente: 

         <div> 

         <h2>Pagamento</h2> 

         <Pay/> 

         </div>    

- Receipt 

    Trata-se de um botão que representa um ícone de carrinho de compras com um número indicando a quantidade de itens no carrinho do usuário. Este componente é projetado para ser uma representação visual e interativa da quantidade de itens no carrinho, permitindo que o usuário acesse facilmente o carrinho ao clicar no ícone. 

    UseStates: 

    cartIndex: useState que rastreia a quantidade de itens no carrinho, inicializado com um valor vazio. 

    screenCart importado do conntexto useAuth fornece informações de autenticação, como dados do carrinho. 

    exemplo de aplicação de componente: 

        <IconButton icon={Receipt} /> 

- Search 

    Este componente é responsável por renderizar uma barra de pesquisa. Proporciona uma experiência interativa ao usuário, permitindo que ele pesquise alimentos e visualize os resultados em uma interface. Pode receber um í*/*cone na propriedade icon que aparentará estar dentro da barra de pesquisa. 

    UseStates: 

    search: useState que armazena a string de pesquisa digitada pelo usuário. 

    searchFoods: useState que armazena os resultados da pesquisa de alimentos. 

    UseEffect: 

    Faz uma requisição à API (/foods?search=${search}) para obter os resultados da pesquisa e atualiza o estado searchFoods com esses resultados. Realiza a busca de alimentos sempre que o estado search é alterado. 

    Se existirem resultados, mapeia cada item em searchFoods e renderiza um FoodBox para cada item. O FoodBox contém: 

    Uma imagem do prato (img) obtida da API. 

    O nome do prato (h2). 

    Se o prato possuir ingredientes cujo o nome seja igual a pesquisa do usuário, exibe uma Tag com o título "Ingrediente" e os ingredientes correspondentes. 

    exemplo de aplicação de componente: 

            <Search icon={Icon_search} placeholder="Busque por pratos ou ingredientes"/> 

 

- Section 

    Este componente é projetado para representar uma seção na interface do usuário com um título, conteúdo rolável horizontalmente e botões de seta para navegação caso a interface do usuário seja desktop.  

    contentRefs: 

    Utiliza a ref contentRef para interagir com o conteúdo rolável. 

    Funções: 

    scrollRight: Função que rola o conteúdo para a direita quando o botão de seta para a direita é clicado. 

    scrollLeft: Função que rola o conteúdo para a esquerda quando o botão de seta para a esquerda é clicado. 

    caso o usuário esteja numa interface de desktop, é adicionado as bordas laterais da seção efeitos de FadeIn e FadeOut com botões seta sobre eles para facilitar a rolagem do conteúdo 

    exemplo de aplicação de componente: 

        <Section key={index} title={category}> 

         {filteredFoods.map((filteredFood, foodIndex) => ( 

          <FoodCard/> 

        ))} 

        </Section> 

 

- Select 

    Representa um componente de seleção (dropdown) em uma interface do usuário. Ele fornece uma lista de opções para o usuário escolher e exibe um ícone opcional, um título e uma marcação visual para indicar o status do pedido.  

    Propriedades Recebidas: 

    icon: Icon: Um ícone opcional que pode ser fornecido. 

    title: Um título que será exibido acima do componente de seleção. 

    options: Um array de opções para preencher o dropdown. 

    onChange: Uma função para ser chamada quando a seleção é alterada. 

    orderStatus: Um valor para indicar o status do pedido (aparentemente usado para estilização). 

    ...rest: Propriedades adicionais que podem ser aplicadas ao elemento select. 

    exemplo de aplicação de componente: 

        <Select 

            options={options} 

            onChange={(e) => changeOrderStatus(e.target.value, order.id)} 

            orderStatus={order.status} 

            defaultValue={order.status} 

        /> 

- TagAddBox 

    Representa uma caixa de entrada de texto com um botão associado para adicionar ou remover uma tag. Este componente é útil para criar uma interface amigável que permite ao usuário adicionar ou remover tags de forma interativa. O uso condicional de estilos e rótulos do botão torna o componente versátil. 

    Propriedades Recebidas: 

    $isNew: Uma propriedade que condicionalmente altera o estilo da caixa, indicando se a tag é nova ou existente. 

    value: O valor da entrada de texto, utilizado para exibir e modificar o conteúdo da caixa. 

    onClick: Uma função que será chamada quando o botão associado for clicado. 

    ...rest: Propriedades adicionais que podem ser aplicadas à entrada de texto. 

    exemplo de aplicação de componente: 

        <TagBox>
            <TagAddBox                             
            $isNew                             placeholder="Adicionar"                            
            value={newIngredients}                            
            onChange={e => setNewIngredients(e.target.value)}                             onClick={handleAddIngredients}                            
            />                            
            { 
                ingredients.map((ingredients, index)=>(  
                    <TagAddBox 
                    key={String(index)} 
                    value={ingredients} 
                    onClick={() => handleRemoveIngredients(ingredients)} 
                    /> 
                    )) 

                } 

        </TagBox> 

 

- Tag  

 

    Este componente se trata de um elemento span simles que leva um padrão. recebe a propriedade title para a inserção do texto. 

    exemplo de aplicação de componente: 

         { 
             food.foodIngredients && ( 
                food.foodIngredients.map((ingredient) => ( 
                <Tag key={ingredient.id} 
                title={ingredient.name}/> 
            ))) 
        } 

- TextBox  

    Um elemento textarea que possui no mesmo componente um prop title que define um título para o imput informando para que servirá o dado a ser inserido. além disso é possível pelo prop Icon adicionar um ícone que ficara à esquerda, "dentro do imput". 

    exemplo de aplicação de componente:       

            <TextBox title={"Descrição"} 

            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 

            onChange={e => setDescription(e.target.value)}/> 

- TextButton  

    Representa um botão de texto. Este componente é útil para criar botões de texto interativos em uma aplicação React. Ele oferece flexibilidade para personalizar o texto, o estilo (com base na ativação) e a presença de um ícone. O suporte para um estado de carregamento também adiciona uma camada adicional de interatividade à interface do usuário. 

    Propriedades Recebidas: 

    title: O texto que será exibido no botão. 

    $isActive: Uma propriedade que condicionalmente altera o estilo do botão, indicando se ele está ativo ou não. O valor padrão é false. 

    icon: Icon: Um ícone opcional que pode ser fornecido para ser exibido junto ao texto do botão. 

    loading: Uma propriedade que indica se o botão está em um estado de carregamento. O valor padrão é false. 

    ...rest: Propriedades adicionais que podem ser aplicadas ao elemento button. 

    exemplo de aplicação de componente:    

        <TextBox title={"Descrição"} placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
        defaultValue={food.descriptions} 
        onChange={e => setDescription(e.target.value)}/> 

 

### Routes 

Existem essencialmente três categorias de páginas: páginas de autenticação do usuário, páginas do usuário comum e páginas do usuário administrador. O roteamento de páginas é realizado no arquivo Front-FoddExplorer\src\routes\index.jsx e segue o seguinte padrão: 

A rota inicialmente tenta obter informações do usuário no contexto useAuth. Se não houver informações de usuário, o acesso é liberado apenas para as rotas de login e signUp. Se houver informações do usuário no contexto useAuth, isso indica que o usuário realizou um login bem-sucedido. Em seguida, ocorre outra verificação para determinar se esse usuário é ou não um administrador. Se não for, ele recebe acesso às rotas do usuário comum; se sim, ele obtém acesso às rotas de administração, que incluem as seguintes páginas: NewFood para cadastrar novos produtos e EditFood para a edição de produtos já cadastrados. 

### paginas  

#### authPages 

- Login  

    Essa página oferece uma interface de usuário simples para o processo de login, permitindo que o usuário insira seu e-mail e senha. O botão "Entrar" realiza a autenticação, e o botão de texto "Criar uma conta" redireciona o usuário para a página de cadastro. 

    UseStates: 

    email: useState local que armazena o valor do campo de entrada de e-mail. 

    password: useState local que armazena o valor do campo de entrada de senha. 

    Funções: 

    handleSignIn(): Função que chama o método signIn do hook useAuth com as informações de e-mail e senha para realizar o login. 


    handleSignUp(): Função que navega para a página de cadastro (/signUp) ao ser chamada. 

- SignUp 

    Essa página oferece uma interface de usuário para que os usuários possam se cadastrar fornecendo seu nome, e-mail e senha. O botão "Cadastrar" envia os dados para a API de cadastro, e o botão de texto "Já tenho uma conta" redireciona o usuário para a página de login. 

    UseStates: 

    name: useState local que armazena o valor do campo de entrada para o nome do usuário. 

    email: useState local que armazena o valor do campo de entrada para o e-mail. 

    password: useState local que armazena o valor do campo de entrada para a senha. 

    Funções: 

    handleLogin(): Função que aciona a navegação para a página de login ("/") ao ser chamada. 

    handleSignUp(e): Função que é acionada no envio do formulário de cadastro. Realiza as seguintes ações: 

    Previne o comportamento padrão do envio do formulário. 

    Valida se todos os campos (nome, e-mail, senha) estão preenchidos. Caso contrário, exibe um alerta indicando que todos os campos devem ser preenchidos. 

    Realiza uma requisição POST para a rota "/users" da API, enviando os dados de nome, e-mail e senha. 

    Exibe alertas de sucesso ou erro com base na resposta da API. 

    Em caso de sucesso, redireciona o usuário para a página de login ("/"). 

#### AdmPages 

- NewFood 


    Essa página oferece uma interface de usuário para criar um novo prato, inserindo informações como nome, categoria, preço, descrição, ingredientes e imagem. O usuário é informado sobre o sucesso ou falha da operação através de alertas visuais. 

    UseStates: 

    imgFile: useState que armazena o arquivo de imagem do prato. 

    name: useState que armazena o nome do prato. 

    category: useState que armazena a categoria do prato. 

    price: useState que armazena o preço do prato. 

    description: useState que armazena a descrição do prato. 

    ingredients: useState que armazena a lista de ingredientes do prato. 


    newIngredients: useState que armazena o novo ingrediente a ser adicionado. 

    alert, alertType, AlertMessage: useStates locais relacionados à exibição de um alerta. 

    Funções: 

    showAlert(message, type): Função para exibir um alerta na interface com uma mensagem e um tipo específico. 

    handleAddIngredients(): Função para adicionar um novo ingrediente à lista de ingredientes. 

    handleRemoveTags(deleted): Função para remover um ingrediente da lista de ingredientes. 

    handleSelectChange(event): Função para atualizar o estado da categoria quando o valor do Select muda. 

    handleChangeFoodImg(event): Função para atualizar o estado do arquivo de imagem quando o valor do campo de upload muda. 

    handleSaveButton(): Função para lidar com o botão de salvar, realizando as validações necessárias e fazendo uma chamada à API para criar um novo prato, caso alguma validação falhe um alerta é disparado informando oque há de errado. 

    goBack(): Função para navegar de volta à página anterior. 

- EditFood  

    Esta página é a interface de edição de um prato, permite que o usuário administrador faça edição em qualquer dado de um produto especifico. 

    UseStates: 

    food: Armazena os detalhes do prato a ser editado, inicializado como null. 

    imgFile: Armazena o arquivo de imagem do prato. 

    name: Armazena o nome do prato. 

    category: Armazena a categoria do prato. 

    price: Armazena o preço do prato. 

    description: Armazena a descrição do prato. 

    ingredients: Armazena a lista de ingredientes do prato. 

    newIngredients: Armazena o novo ingrediente a ser adicionado. 

    alert, alertType, AlertMessage: useStates locais relacionados à exibição de um alerta. 

    Funções: 

    showAlert(message, type): Exibe um alerta na interface com uma mensagem e um tipo específico. 

    handleAddIngredients(): Adiciona um novo ingrediente à lista de ingredientes. 

    handleRemoveIngredients(deleted): Remove um ingrediente da lista de ingredientes. 

    handleChangeFoodImg(event): Atualiza o estado do arquivo de imagem quando o valor do campo de upload muda. 

    handleSaveButton(): Lida com o botão de salvar, realizando as validações necessárias e fazendo uma chamada à API para atualizar o prato. 

    handleDeleteButton(): Lida com o botão de excluir, exibindo um prompt de confirmação e fazendo uma chamada à API para excluir o prato. 

    goBack(): Navega de volta à página anterior. 

    useEffect: 

    Utiliza o hook useEffect para buscar os detalhes do prato quando o componente é montado. 

    Atualiza os estados locais com os detalhes do prato quando esses detalhes são carregados. 

#### AppPages 


- Home 

    A página Home é a página inicial da aplicação, responsável por exibir diferentes seções de alimentos agrupados por categorias. 

    Os alimentos são organizados de acordo com a ordem específica definida em desiredOrder. 

    Os alimentos são exibidos em seções, cada uma correspondendo a uma categoria específica. 

    Cada seção contém vários cartões de alimentos, exibindo detalhes como imagem, título, descrição e preço. 

    UseStates: 

    categories: Armazena a lista de categorias de alimentos disponíveis. 

    foods: Armazena a lista de alimentos disponíveis agrupados por categoria. 

    Funções: 

    handleDetails(id): Navega para a página de detalhes do alimento ao receber um ID como parâmetro. 

    A função handleDetails é chamada ao clicar em um cartão de alimento para navegar até a página de detalhes do alimento. 

- FoodDetails 

    A página exibe detalhes específicos sobre um determinado alimento, permitindo aos usuários visualizar informações como nome, descrição, ingredientes, imagem e interagir com o alimento, como ajustar a quantidade, adicionar ao carrinho, ou editar o prato se o usuário for um administrador.  

    Utiliza o contexto de autenticação useAuth para acessar informações do usuário e funcionalidades relacionadas ao carrinho. 

    A quantidade de porções e ação de adicionar ao carrinho são exibidas apenas para usuários não administradores. 

    O botão de edição do prato é exibido apenas para usuários administradores. 

    As informações do alimento são buscadas na API ao montar o componente. 

    UseStates: 

    food: Armazena as informações do alimento específico. 

    likeIcon: Representa o estado do ícone "curtir", indicando se o usuário curtiu ou não o prato. 

    foodsValue: Armazena a quantidade de porções do alimento que o usuário deseja adicionar ao carrinho. 

    useEffect: 

    Busca as informações do alimento quando o componente é montado. 

    Funções: 

    goBack(): Navega de volta à página anterior. 

    handleFoodsValueChange(newValue): Atualiza o estado foodsValue com a nova quantidade desejada. 

    handleAddButton(): Adiciona o alimento ao carrinho com a quantidade desejada. 

    handleLikeButton(): Atualiza o estado likeIcon ao clicar no botão de "curtir". 

    handleEditFood(): Navega para a página de edição do alimento se o usuário for um administrador. 

- LikedFoods 

    A página exibe uma lista de produtos favoritados pelo usuário, permitindo a visualização e a remoção desses itens da lista de favoritos. 

    UseStates: 

    foods: Armazena a lista completa de alimentos favoritos do usuário. 

    displayedFoods: Armazena a lista de alimentos a serem exibidos na página, podendo ser filtrada ou modificada dinamicamente. 

    useEffect: 

    Busca a lista inicial de alimentos favoritos do usuário quando o componente é montado. 

    Funções: 

    handleDetails(id): Navega para a página de detalhes de um alimento específico ao clicar em um item da lista. 

    handleRemoveItem(id): Remove um alimento da lista de favoritos do usuário e atualiza a exibição. 

-  Cart  

    A página exibe o carrinho de compras do usuário, permitindo a visualização dos itens selecionados, seu valor total, e fornecendo a opção de avançar para o pagamento. 

    Os alimentos no carrinho são exibidos em cards, mostrando detalhes como quantidade, nome e preço total. 

    O valor total do carrinho é calculado e exibido. 

    UseStates: 

    foods: Armazena a lista de alimentos no carrinho de compras. 

    cartValue: Armazena o valor total do carrinho de compras. 

    paymentPageStatus: caso mobile, controla o estado da página de pagamento: (página 0: detalhes do pedido, página 1: pagamento). 

    useEffect: 

    busca da API a lista de alimentos no carrinho de compras e calcular o valor total ao montar o componente ou quando screenCart é atualizado. 

    Funções: 

    handleDetails(id): Navega para a página de detalhes de um alimento específico ao clicar em um item do carrinho. 

    handleNextButton(): Avança para a página de pagamento (altera o estado paymentPageStatus para "1"). 

- OrdersHistory 

    A página exibe o histórico de pedidos, proporcionando uma visão detalhada dos pedidos realizados. 

    A tabela exibe detalhes dos pedidos, como código, status, detalhamento e data e hora.  

    Enquanto o usuário comum recebe na tabela uma lista dos pedidos já efetuados por ele o administrador recebe todos os pedidos de todos os usuários. 

    O administrador tem a capacidade de alterar o status de um pedido. 

    A página se adapta para exibir o conteúdo de forma responsiva em diferentes tamanhos de tela (desktop e mobile). 

    UseStates: 

    orders: Armazena a lista de pedidos a serem exibidos. 

    statusPageReload: Controla o recarregamento da página ao alterar o status de um pedido. 

    useEffect: 

    Busca e carregar a lista de pedidos ao montar o componente ou quando statusPageReload é alterado. 

    Funções: 

    changeOrderStatus(newStatus, id): Altera o status de um pedido específico ao interagir com um componente de seleção. Atualiza o estado statusPageReload para recarregar a página. 

    transformStringData(dataString): Converte a data no formato de string para um formato mais legível. 

