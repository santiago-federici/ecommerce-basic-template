import './Home.css'

export function Home () {
  return (
    <main className='wrapper home-main'>
      <article className='home-hero'>
        <div className='hero-info'>
          <h1>Monaco Lentes</h1>
          <p>¿Quieres tener el mejor estilo y a la vez cuidar de tu vista? Todos nuestros lentes cuentan con protección UV 100%.</p>

          <div className='hero-btns-container'>
            <button className='primary-btn'>Registrarse</button>
            <button className='secondary-btn'>Iniciar sesión</button>
          </div>
        </div>

        <img className='hero-img' src='https://imgs.search.brave.com/uv_yTeoxF6wVX_oDKT5AJbbkOUN0qn_SQlAKNb_Kguo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3Ivc3VuZ2xhc3Nl/cy1sb2dvLWNvbmNl/cHQtZ2xhc3Nlcy1s/b2dvLXRlbXBsYXRl/XzEwMjUwLTUwNTMu/anBnP3NpemU9NjI2/JmV4dD1qcGc' alt='' />
      </article>

      <div className='scroller'>
        <div className='scroller__inner'>
          <img
            className='scroll-img'
            src='https://d22fxaf9t8d39k.cloudfront.net/ddccba0225479f76287cf19a89e078815341b0b316f0e521b3d2593fa26cc9d8249761.jpg'
            alt=''
          />
          <img
            className='scroll-img'
            src='https://d22fxaf9t8d39k.cloudfront.net/fb10aece4863893cd323d3ecb3054cdde0c08511b6d1973f06b36223fe2f81d9249761.jpg'
            alt=''
          />
          <img
            className='scroll-img'
            src='https://d22fxaf9t8d39k.cloudfront.net/60769cccde15ef8dfb956aeb575cace3aff9a86716ec22c494880da9afd3110d249761.jpg'
            alt=''
          />
          <img
            className='scroll-img'
            src='https://d22fxaf9t8d39k.cloudfront.net/835875261d55f75e162e8044e379b49a7473b7ec5020f3de9141af0e3dabf003249761.jpg'
            alt=''
          />
          <img
            className='scroll-img'
            src='https://d22fxaf9t8d39k.cloudfront.net/0fe3bd5261394d3e47ef311696c8ad4634e72dfa4b04de8855e7e27c7f3155d8249761.jpg'
            alt=''
          />
          <img
            className='scroll-img'
            src='https://d22fxaf9t8d39k.cloudfront.net/11cdb50e25d3a3d7ade0c13a49ceb688b920685775c11c0e1769aa2f37b7a131249761.jpg'
            alt=''
          />
          <img
            className='scroll-img'
            src='https://d22fxaf9t8d39k.cloudfront.net/d8ac0eab42227b8ed22a7f1a9c8e5e2ef48291f9cefa4d0bee517466aa23b5b5249761.jpg'
            alt=''
          />
          <img
            className='scroll-img'
            src='https://d22fxaf9t8d39k.cloudfront.net/66e1b74e20d209a926331be5343fd26915d570628603db5828dd414b4d770d0a249761.jpg'
            alt=''
          />
          <img
            className='scroll-img'
            src='https://d22fxaf9t8d39k.cloudfront.net/025c3e7a328de5b7f41e53bfdee9c9fbfd437756b614558d10ec1dc94c24392b249761.jpg'
            alt=''
          />
        </div>
      </div>
    </main>
  )
}
