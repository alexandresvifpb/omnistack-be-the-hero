import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from "expo-mail-composer";

import logoImg from '../../assets/logo.png';

import styles from "./styles";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Hello ${incident.name}, I am contacting you because I would like to help in the case "${incident.title}" with the value of ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}`;

  function navigateToDetail() {
    navigation.goBack();
  }

  function SendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`);
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Hero of the case: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity
          // style={styles.detailsButton}
          onPress={navigateToDetail}
        >
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>

      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>
          {incident.name} de {incident.city}/{incident.uf}
        </Text>

        <Text style={styles.incidentProperty}>CASE:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL' 
          }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Save the day!</Text>
        <Text style={styles.heroTitle}>Be the hero of this case.</Text>

        <Text style={styles.heroDescription}>Contact:</Text>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.action}
            onPress={SendWhatsApp}
          >
            <Text style={styles.actionText}>WhatsApp:</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.action}
            onPress={sendMail}
          >
            <Text style={styles.actionText}>E-mail:</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}