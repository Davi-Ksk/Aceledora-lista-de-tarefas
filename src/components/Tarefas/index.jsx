import { FiPlus, FiX } from 'react-icons/fi';
import "./styles.css";

export function Tarefa({ isNew, value, onClick, ...rest }) {
    return (
        <Container>
          <div className="task">
            <input type="text"
                value={value}
                readOnly={!isNew} //Se não é novo, bloqueia o input.
                {...rest}
            />

            <button 
                onClick={onClick}
                type="button"
                {...rest}
                className={isNew ? 'button-add' : 'button-delete'}
            >
                {isNew ? <FiPlus /> : <FiX /> /*Se é novo, adiciona o incone X*/ }
            </button>
          </div>
        </Container>
    );
}