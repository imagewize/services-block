/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

// Import SVG directly
import wpSvg from './assets/devicon-plain--wordpress-w.svg';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	
	const TEMPLATE = [
		['core/heading', {
			level: 2,
			content: 'Our Awesome Services',
			align: 'center',
			className: 'text-3xl font-bold font-open-sans mb-12'
		}],
		['core/paragraph', {
			content: 'We live and breathe web design, e-commerce, hosting, and website maintenance.',
			align: 'center',
			className: 'mx-auto max-w-2xl text-xl leading-relaxed mb-12 text-textBodyGray font-open-sans font-light'
		}],
		['core/columns', {}, [
			['core/column', {}, [
				['core/columns', {}, [
					['core/column', { width: '20%' }, [
						['imagewize/svg-block', {
							svgUrl: wpSvg  // Only set the SVG URL, rest uses defaults from block.json
						}]
					]],
					['core/column', { width: '80%' }, [
						['core/heading', { level: 3, content: 'WordPress Sites', className: 'service-title' }],
						['core/paragraph', { content: 'Service description here...', className: 'service-body' }]
					]]
				]]
			]],
			['core/column', {}, [
				// Similar nested structure for second service
			]]
		]],
		// Repeat for other rows
	];

	return (
		<section {...blockProps} className="py-16 bg-gray-50">
			<div className="container mx-auto max-w-4xl px-4">
				<InnerBlocks 
					template={TEMPLATE}
				/>
			</div>
		</section>
	);
}
