import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import DeleteIcon from '@mui/icons-material/Delete'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import EditIcon from '@mui/icons-material/Edit'
import './product_styles.css'
const SortableItem = props => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({ id: props.id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		backgroundColor: '#fff',
		boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
		margin: '10px',
		zIndex: isDragging ? '100' : 'auto',
		opacity: isDragging ? 0.3 : 1,
	}

	return (
		<div ref={setNodeRef} style={style} className='product'>
			<button {...listeners} {...attributes} className='product__btn'>
				<DragIndicatorIcon fontSize='large'></DragIndicatorIcon>
			</button>
			<div className='product__content'>
				<img src={props.paletteImg} alt='Палетка' className='product__img' />
				<p className='product__name'>{props.paletteName}</p>
			</div>
			<div className='product_controls'>
				<button className='product__btn product__trash' onClick={props.edit}>
					<EditIcon fontSize='large'></EditIcon>
				</button>
				<button className='product__btn product__trash' onClick={props.remove}>
					<DeleteIcon fontSize='large'></DeleteIcon>
				</button>
			</div>
		</div>
	)
}

export default SortableItem
