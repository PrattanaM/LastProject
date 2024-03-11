import React, { useState, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import ColorPicker from './ColorPicker';

interface TabItem {
  label: string;
  content: string;
}

export default function ThemeTab(): JSX.Element {
  const [tabs, setTabs] = useState<TabItem[]>([]);
  const [value, setValue] = useState<number>(0);

  const handleAddTab = () => {
    // ดึงลำดับที่ว่างที่ใหญ่ที่สุดจาก Tabs ทั้งหมด
    const existingIndexes = tabs.map((tab) => parseInt(tab.label.match(/\d+/)?.[0] || '0', 10));
    const maxIndex = Math.max(...existingIndexes);

    // ตรวจสอบหากไม่มี Tabs ในรายการ
    const newIndex = Number.isFinite(maxIndex) ? maxIndex + 1 : 1;

    // เพิ่ม Tabs ใหม่
    const newTabs = [...tabs, { label: `Theme ${newIndex}`, content: `Content ${newIndex}` }];
    setTabs(newTabs);
    setValue(newTabs.length - 1);
  };


  const handleDeleteTab = (index: number) => {
    const newTabs = tabs.filter((tab, i) => i !== index);
    setTabs(newTabs);
    setValue(Math.min(value, newTabs.length - 1));
  };

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ marginLeft: '20px' }}>Theme</h1>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddTab}
            style={{
              borderRadius: '50%',
              fontSize: '20px',
              padding: '10px',
              backgroundColor: 'transparent',
              transition: 'box-shadow 0.3s',
              boxShadow: 'none'
            }}
          >
            <AddToPhotosIcon style={{ fontSize: '40px', color: 'black' }} />
          </Button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              flexGrow: 1,
              maxWidth: { sm: 950 },
              bgcolor: 'background.paper',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            >
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  label={
                    <span style={{ textTransform: 'none' }}>
                      {tab.label}
                    </span>
                  }
                />
              ))}
            </Tabs>
          </Box>
        </div>
      </div>
      <div>
        {tabs.map((tab, index) => (
          <div key={index} style={{ display: index === value ? 'block' : 'none' }}>
            {/* <ColorPicker themesData={themes} /> */}
          </div>
        ))}
      </div>

    </>
  );
}