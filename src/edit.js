import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { columns, nameColor, bioColor } = attributes;

	const onChangeColumns = ( newColumns ) => {
		setAttributes( { columns: newColumns } );
	};
	return (
		<div
			{ ...useBlockProps( {
				className: `has-${ columns }-columns`,
			} ) }
		>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __( 'Columns', 'team-members' ) }
						min={ 1 }
						max={ 6 }
						onChange={ onChangeColumns }
						value={ columns }
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Color Settings', 'text-domain' ) }
					initialOpen={ false }
				>
					<PanelColorSettings
						colorSettings={ [
							{
								value: nameColor,
								onChange: ( value ) => {
									setAttributes( {
										nameColor: value,
									} );
								},
								label: __(
									'Team Name Color',
									'text-domain'
								),
							},
							{
								value: bioColor,
								onChange: ( value ) => {
									setAttributes( {
										bioColor: value,
									} );
								},
								label: __(
									'Team Bio Color',
									'text-domain'
								),
							},
						] }
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={ [ 'block-context/team-member' ] }
				orientation="horizontal"
				template={ [
					[ 'block-context/team-member' ],
					[ 'block-context/team-member' ],
					[ 'block-context/team-member' ],
				] }
			/>
		</div>
	);
}
