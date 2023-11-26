/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

// eslint-disable-next-line react/prop-types
const AddFormTransaction = ({dispatch,onSubmit,state}) => {
  return (
    <div>
        <form onSubmit={onSubmit}>
            <TextField 
                label="description"
                name='description'
                onChange={(e)=>dispatch({description:e.target.value, transactionAmount:state.transactionAmount, transactionType:state.transactionType})}
                required
                variant="outlined"
                color="secondary"
                type="text"
                sx={{mb: 3}}
                fullWidth
                value={state.description || ''}
                
                />	
                <TextField 
                label="amount"
                name="amount"
                onChange={(e) => dispatch({ description: state.description, transactionAmount: e.target.value, transactionType: state.transactionType })}
                required
                variant="outlined"
                color="secondary"
                type="number"
                value={state.transactionAmount || ''}  
                fullWidth
                sx={{ mb: 3 }}
            />

                <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group">
                        <FormControlLabel value="income" name='radio' control={<Radio />} label="Income" onChange={(e)=>dispatch({ transactionType:e.target.value, description:state.description, transactionAmount:state.transactionAmount })}/>
                        <FormControlLabel value="expense" name='radio' control={<Radio />} label="Expense" onChange={(e)=>dispatch({ transactionType:e.target.value, description:state.description, transactionAmount:state.transactionAmount })}/>
                </RadioGroup>
            
            <Button variant="outlined" color="secondary" type="submit">Add Transaction</Button>
        </form>
    </div>
  )
}

export default AddFormTransaction