const CheckboxWithLiveFeedback = (props) => {
  return (
    <>
      <label className="relative flex items-start mt-2">
        <div className="flex items-center h-5">
          <input 
            type="checkbox"
            name="terms"
            onChange={(e) => {
              props.setIsTermsTouched(true);
              props.setIsChecked(e.target.checked);
            }}
            className={`form-checkbox h-4 w-4 text-indigo-600 border transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:shadow-outline-blue ${(props.isTouched && !props.isChecked) ? 'border-red-400' : 'border-gray-200'}`}
          />
          </div>
        <div>
          <div className="ml-2 text-sm leading-5">
            <span className="font-medium text-gray-700">Eu li e aceito os <a href="https://kiwify.com.br/termos-de-uso" target="_blank" rel="noreferrer" className="underline"> termos de uso</a>, <a href="https://kiwify.com.br/licenca-de-uso-software" target="_blank" rel="noreferrer" className="underline"> termos de licença de uso de software</a>, <a href="https://kiwify.com.br/politica-de-conteudo" target="_blank" rel="noreferrer" className="underline"> política de conteúdo</a> da Kiwify 
            </span>
          </div>
          {props.isTouched && !props.isChecked ? (
            <>
              <div
                id={`${props.id}-feedback`}
                aria-live="polite"
                className="text-sm text-red-500 ml-2"
              >
                (Esse campo é obrigatório)
              </div>
            </>
        ) : null}
        </div>
      </label>
    </>
  );
};

export default CheckboxWithLiveFeedback;