import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

import {GameController} from 'phosphor-react-native'

export interface DuoCardProps{
  id:string;
  name:string;
  useVoiceChennel: boolean,
  weekDays:string[];
  hourEnd:string;
  hourStart:string;
  yearsPlaying:number;
} 


interface Props {
  data:DuoCardProps;
  onConnect: ()=> void
}

export function DuoCard({data , onConnect}:Props) {


 

  return (
    <View style={styles.container}>
      <DuoInfo
        label='Nome'
        value={data.name}
      />
        <DuoInfo
        label='Tempo de jogo'
        value={`${data.yearsPlaying} anos`}
      />
        <DuoInfo
        label='Disponibilidade'
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}` }
      />
        <DuoInfo
        label="Chamada de áudio"
        value={data.useVoiceChennel ? "Sim": 'Não'}
        colorValue={data.useVoiceChennel ? THEME.COLORS.SUCCESS: THEME.COLORS.ALERT}
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController size={20}color={THEME.COLORS.TEXT}/>
        
        <Text style={styles.buttonTitle}>
          Conectar
        </Text>

      </TouchableOpacity>
    </View>
  );
}