import styled from 'styled-components';

export const PhoneBookContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;

  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const PhoneBookTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
  margin-bottom: 16px;
`;

export const PhoneBookInputContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

export const PhoneBookInputLabel = styled.p`
  display: flex;
  flex: 1;
  font-size: 18px;
  color: #333;
  margin: 0;
  margin-top: 8px;
`;

export const PhoneBookInput = styled.input`
  flex: 3;
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

export const PhoneBookButton = styled.button`
  flex: 1;
  width: fit-content;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: auto;
  margin-top: 8px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #0056b3;
  }
`;

export const PhoneBookContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const PhoneBookContactItem = styled.li`
  font-size: 16px;
  margin: 8px 0;
`;

export const PhoneBookContactTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin: 0;
  margin-bottom: 16px;
`;

export const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #fff;
  gap: 10px;
`;

export const DeleteButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 6px 14px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;
