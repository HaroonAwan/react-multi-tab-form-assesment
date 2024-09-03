import {Icon} from "@iconify/react";
import {Select} from '@headlessui/react';
import {DateRangePicker, LocalizationProvider, SingleInputDateRangeField} from "@mui/x-date-pickers-pro";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {Checkbox, Radio} from '@mui/material';
import {useState} from "react";

const Flight = () => {
    const [selectedValue, setSelectedValue] = useState('roundtrip');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (<div>
        <div className='flex gap-4 my-4 text-sm font-normal'>
            <div className='flex items-center flex-1'>
                <Radio
                    checked={selectedValue === 'roundtrip'}
                    onChange={handleChange}
                    value="roundtrip"
                    name="flight"
                    id='roundtrip'
                    icon={
                        <div>
                            <Icon icon="ci:radio-unchecked" width="24" height="24"/>
                        </div>
                    }
                    checkedIcon={
                        <div>
                            <Icon icon="material-symbols:radio-button-checked" width="24" height="24" color="#1414d2"/>
                        </div>
                    }
                />
                <label htmlFor='roundtrip'>Round trip</label>
            </div>
            <div className='flex items-center flex-1'>
                <Radio
                    checked={selectedValue === 'oneway'}
                    onChange={handleChange}
                    value="oneway"
                    name="flight"
                    id='oneway'
                    icon={
                        <div>
                            <Icon icon="ci:radio-unchecked" width="24" height="24"/>
                        </div>
                    }
                    checkedIcon={
                        <div>
                            <Icon icon="material-symbols:radio-button-checked" width="24" height="24" color="#1414d2"/>
                        </div>
                    }
                />
                <label htmlFor='oneway'>One-way</label>
            </div>
            <div className='flex items-center gap-2 flex-1'>
                <Checkbox id='bookWithMiles' name='bookWithMiles' className='size-4'
                          icon={<div>
                              <Icon icon="system-uicons:checkbox-empty" width="24" height="24"/>
                          </div>}
                          checkedIcon={<div>
                              <Icon icon="ion:checkbox" width="24" height="24" color="#1414d2"/>
                          </div>}
                />
                <label htmlFor='bookWithMiles'>Book with miles</label>
            </div>
            <div className='flex items-center gap-2 flex-1'>
                <Checkbox id='flexibleDates' name='flexibleDates' className='size-4'
                          icon={<div>
                              <Icon icon="system-uicons:checkbox-empty" width="24" height="24"/>
                          </div>}
                          checkedIcon={<div>
                              <Icon icon="ion:checkbox" width="24" height="24" color="#1414d2"/>
                          </div>}
                />
                <label htmlFor='flexibleDates'>Flexible dates</label>
            </div>
        </div>
        <div className='grid grid-cols-11 gap-y-5 my-4 text-base font-normal'>
            <div className='flex flex-col gap-1 col-span-5'>
                <label htmlFor='from'>From*</label>
                <input type='text' id='from' name='from'
                       className='p-2 border placeholder:italic border-[#8a8a8a] w-full rounded-lg'
                       placeholder='Origin'/>
            </div>
            <div className='flex justify-center pt-[34px]'>
                <Icon icon="fluent:arrow-swap-28-regular" width="30" height="30" color='#001bca'
                      className='cursor-pointer'/>
            </div>
            <div className='flex flex-col gap-1 col-span-5'>
                <label htmlFor='to'>To*</label>
                <input type='text' placeholder="Destination" id='to' name='to'
                       className='p-2 border placeholder:italic border-[#8a8a8a] w-full rounded-lg'/>
            </div>
            <div className='flex flex-col gap-1 col-span-5'>
                <label htmlFor='date'>Dates*</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['SingleInputDateRangeField']}>
                        <DateRangePicker
                            format={'MMM-DD'}
                            slots={{field: SingleInputDateRangeField}}
                            slotProps={{
                                textField: {
                                    InputProps: {
                                        placeholder: 'From - To', styles: {
                                            padding: '0 !Important',
                                            border: '1px solid red',
                                            borderRadius: '10px',
                                            width: '100%',
                                            height: '100%',
                                            fontSize: '15px',
                                            color: '#001bca',
                                            '&:hover': {
                                                borderColor: '#001bca'
                                            }
                                        }, endAdornment: <Icon icon="simple-line-icons:calender" width="20" height="20"
                                                               color='#001bca'/>
                                    }
                                }
                            }}
                        />
                    </DemoContainer>
                </LocalizationProvider>

            </div>
            <div/>
            <div className='flex flex-col gap-1 col-span-5'>
                <label htmlFor='travelers'>Travelers*</label>
                <input type='number' id='travelers' name='travelers'
                       className='p-2 border placeholder:italic border-[#8a8a8a] w-full rounded-lg'
                       value={1}/>
            </div>

            <div className='flex flex-col gap-1 col-span-5 mt-5'>
                <div className="relative">
                    <Select defaultValue="economy"
                            className='p-2 border font-medium border-[#8a8a8a] w-full rounded-lg appearance-none'
                    >
                        <option value='economy'>Economy</option>
                        <option value='business'>Business</option>
                    </Select>
                    <Icon
                        className="group pointer-events-none absolute top-1/2 right-2.5 size-6 fill-white/60 -translate-y-1/2"
                        icon="fluent:chevron-down-16-regular" color='#001bca'/>
                </div>
            </div>
            <div className='col-span-6'/>
            <div className='col-span-5'>
                <button className="flex items-center gap-px text-[#001bca] text-base font-normal">
                    <span>
                        Advanced search
                    </span>
                    <Icon icon="fluent:chevron-right-20-regular" width="20" height="20" color='#001bca'/>
                </button>

                <span className='text-[12px] font-semibold leading-[18px]'>
                    (Certificates, multi-city and upgrades)
                </span>

                <p className='text-[12px] font-semibold mt-3'>
                    <a className='underline underline-offset-2 leading-5'
                       href="https://www.google.com/search?q=changed+bag+rules" target='_blank'>
                        Changed bag rules
                    </a> and
                    <br/>
                    <a className='underline underline-offset-2 leading-5'
                       href="https://www.google.com/search?q=fees+for+optional+services" target='_blank'>
                        fees for optional services
                    </a>
                </p>
            </div>
            <div/>
            <div className='col-span-5 flex flex-col gap-4 font-normal tracking-wider text-[16px]'>
                <button
                    className={'bg-[#001bca] flex justify-center items-center text-white rounded-full w-full h-[50px]'}>
                    <span>
                        Find flights
                    </span>
                </button>
                <button
                    className={'flex justify-center items-center gap-2 text-[#001bca] border-2 border-[#001bca] rounded-full w-full h-[51px]'}>
                    <Icon icon="f7:wallet" width="18" height="18"/>
                    <span>
                        Find your travel credits
                    </span>
                </button>
            </div>
        </div>
    </div>);
};

export default Flight;
