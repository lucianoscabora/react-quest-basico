const ParagrafoMaiusculoColorido = ({paragraphColor, upperCaseParagraph}) => {
    return (
    <div>
    <p className="p-color-uppercase" style={{color: paragraphColor, textTransform: upperCaseParagraph}}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </p>
    </div>
    )
}

ParagrafoMaiusculoColorido.defaultProps = {
    paragraphColor: "blue",
    upperCaseParagraph: "uppercase"
};

export default ParagrafoMaiusculoColorido