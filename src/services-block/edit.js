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
import wpSvg from './assets/wordpress.svg';
import eCommerceSvg from './assets/shop.svg';

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
							svgUrl: wpSvg
						}]
					]],
					['core/column', { width: '80%' }, [
						['core/heading', { level: 3, content: 'WordPress Sites', className: 'service-title' }],
						['core/paragraph', { content: 'Need a website that stands out? At Imagewize, we design custom WordPress themes and plugins tailored to your brand. Get a unique design and functionality that goes beyond basic templates, delivering a website that truly reflects your business.', className: 'service-body' }]
					]]
				]]
			]],
			['core/column', {}, [
				['core/columns', {}, [
					['core/column', { width: '20%' }, [
						['imagewize/svg-block', {
							svgUrl: eCommerceSvg 
						}]
					]],
					['core/column', { width: '80%' }, [
						['core/heading', { level: 3, content: 'E-Commerce Sites', className: 'service-title' }],
						['core/paragraph', { content: 'For years, we’ve specialized in creating custom WooCommerce & Shopify stores, combining beautiful design with seamless functionality. Our tailored e-commerce solutions are built to meet your unique business needs and deliver an exceptional shopping experience for your customers.', className: 'service-body' }]
					]]
				]]
			]],
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
