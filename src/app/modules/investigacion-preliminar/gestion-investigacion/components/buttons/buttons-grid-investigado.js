import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(0),
        padding: 2
    }
}));

const GridInvestigadoButtons = ({
    rowIndex,
    item,
    disabled,
    onClickShow,
    onClickEdit,
    onClickDelete,
    readonly
}) => {
    const classes = useStyles();

    return (
        <>
            {item.idInvestigado && <Tooltip title="Ver Investigado" aria-label="Add" placement="top">
                <IconButton
                    aria-label="Show"
                    disabled={disabled}
                    className={classes.margin}
                    onClick={() => onClickShow(item.idInvestigado)}
                >
                    <Icon fontSize="small">remove_red_eye</Icon>
                </IconButton>
            </Tooltip>}
            {item.idInvestigado && !readonly && <Tooltip title="Editar" aria-label="Add" placement="top">
                <IconButton
                    aria-label="Edit"
                    disabled={disabled}
                    className={classes.margin}
                    onClick={() => onClickEdit(rowIndex, item.idInvestigado)}
                >
                    <Icon fontSize="small">edit</Icon>
                </IconButton>
            </Tooltip>}
            {!readonly && <Tooltip title="Eliminar" aria-label="Add" placement="top">
                <IconButton
                    aria-label="Delete"
                    disabled={disabled}
                    className={classes.margin}
                    onClick={() => onClickDelete(rowIndex, item.idInvestigado)}
                >
                    <Icon fontSize="small">delete</Icon>
                </IconButton>
            </Tooltip>}
        </>
    );
};

export default GridInvestigadoButtons;
