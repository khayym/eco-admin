import { MultiSelect, Select } from '@mantine/core';
import React, { useState } from 'react';
import CustomTextInput from '../../../../shared/ui/Input';
import CustomNumberInput from '../../../../shared/ui/Input/number';
import CustomTextArea from '../../../../shared/ui/TextArea';
import { HouseInfoStyledContainer, PriceTitle } from './index.styled';

export const DetailsHomeSection = () => {
  const [multiSelectdata, setMultiSelectdata] = useState([
    'React',
    'Angular',
    'Svelte',
    'Vue',
  ]);

  const [data, setData] = useState([
    'Dəvəçi',
    'Bakı',
    'Gəncə',
    'Naxçıvan',
    'Kəlbəcər',
    'Quba',
    'Şəki',
    'İsmayıllı',
    'Tovuz',
    'İmişli',
    'Laçın',
    'Şamaxı',
  ]);

  return (
    <HouseInfoStyledContainer>
      <h2 className="header">House details</h2>
      <div className="house-info-body">
        <PriceTitle>
          <CustomTextInput
            label="House Title"
            placeholder="Qəbələ şəhərində modern dizaynda
            dağ mənzərəli villa"
            radius="md"
            size="md"
            required={true}
          />

          <Select
            label="Select district"
            className="select-dist"
            data={data}
            nothingFound="Nothing found"
            searchable
            creatable
            radius="md"
            size="md"
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={(query) => setData((current) => [...current, query])}
            transition="pop-top-left"
          />
          <CustomNumberInput
            hideControls
            className="price-inp"
            label="Price"
            placeholder="222"
            min={5}
            size="md"
            radius="md"
            max={5000}
            icon={<span className="azn-icon">AZN</span>}
          />
        </PriceTitle>

        <MultiSelect
          label="Choise features"
          data={multiSelectdata}
          placeholder="Select items"
          searchable
          className="multi-feature-select"
          creatable
          radius="md"
          size="md"
          getCreateLabel={(query) => `+ Create ${query}`}
          onCreate={(query) =>
            setMultiSelectdata((current) => [...current, query])
          }
        />
        <CustomTextArea
          placeholder="Add owner's notes"
          label="Owner's notes"
          radius="md"
          minRows={3}
          required={true}
        />
      </div>
    </HouseInfoStyledContainer>
  );
};
