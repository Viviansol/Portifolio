import React from 'react'

const Contato = () => {
    return (
        
        <div className="form" id="contato-section">
            <div className="contact"><h1>Contato</h1></div>
            <div class="form__group field">
  <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
  <label for="name" class="form__label">Name</label>
</div>
   
<div class="form__group field">
  <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
  <label for="name" class="form__label">Email</label>
</div>
   
<div class="form__group field">
  <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
  <label for="name" class="form__label">Assunto</label>
</div>
   
<div class="form__group field">
  <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
  <label for="name" class="form__label">Mensagem</label>
</div>
<div >
    <button className="btn-enviar" type='submit'>Enviar</button>
</div>
           
        </div>
    )
}

export default Contato
