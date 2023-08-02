import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/operation';
import { selectFilter, selectUniqueCar } from 'redux/select';
import { SecondMarkupButton } from 'components/SecondMarkupButton/SecondMarkupButton';

import Select from 'react-dropdown-select';

import {
  Text,
  Wrap,
  SelectWrap,
  SelectSecondWrap,
  Input,
  InputWrapper,
  InputSecond,
} from './PrioritySelect.styled';

export const PrioritySelect = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  const arrFilter = useSelector(selectUniqueCar);

  const handleFilterChange = selectedItems => {
    if (selectedItems.length > 0) {
      const selectedMake = selectedItems[0].value;
      dispatch(changeFilter(selectedMake));
    }
  };

  const options = arrFilter.map(car => ({ label: car, value: car }));
  const value = [{ label: filters, value: filters }];

  const numberObjects = [];
  for (let i = 10; i <= 200; i += 10) {
    numberObjects.push({ label: i, value: i });
  }

  return (
    <Wrap>
      <div>
        <Text>Car brand</Text>
        <SelectWrap>
          <Select
            options={options}
            values={value}
            color="#3470FF"
            style={{ border: 'none', padding: '14px', borderRadius: '14px' }}
            dropdownHandleRenderer={({ state }) => (
              <span>
                {state.dropdown ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 12.5L10 7.5L15 12.5"
                      stroke="#121417"
                      strokeWidth="2"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="#121417"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </span>
            )}
            onChange={value => handleFilterChange(value)}
          />
        </SelectWrap>
      </div>
      <div>
        <Text>Price/ 1 hour</Text>
        <SelectSecondWrap>
          <Select
            options={numberObjects}
            values={numberObjects}
            name="To"
            color="#3470FF"
            style={{
              border: 'none',
              padding: '14px 18px',
              borderRadius: '14px',
            }}
            dropdownHandleRenderer={({ state }) => (
              <span>
                {state.dropdown ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 12.5L10 7.5L15 12.5"
                      stroke="#121417"
                      strokeWidth="2"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="#121417"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </span>
            )}
            onChange={value => console.log(value)}
          />
        </SelectSecondWrap>
      </div>
      <div>
        <Text>Сar mileage / km</Text>
        <InputWrapper>
          <Input type="number" placeholder="From " />
          <InputSecond type="number" placeholder="To" />
        </InputWrapper>
      </div>
      <div>
        <SecondMarkupButton title="Search" />
      </div>
    </Wrap>
  );
};
