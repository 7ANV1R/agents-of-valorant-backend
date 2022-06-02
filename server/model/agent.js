const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
 name: {
  type: String,
  required: true,
 },
 agentImg: {
  type: String,
  required: true,
 },
 role: {
  type: String,
  required: true,
 },
 agentNumber: {
  type: Number,
  required: true,
 },
 agentBio: {
  type: String,
  required: true,
 },
 selectionVoice: {
  type: String,
  required: true,
 },
 bgColor: {
  type: String,
  required: true,
 },
 qAbilityName: {
  type: String,
  required: true,
 },
 qAbilityDescription: {
  type: String,
  required: true,
 },
 eAbilityName: {
  type: String,
  required: true,
 },
 eAbilityDescription: {
  type: String,
  required: true,
 },
 cAbilityName: {
  type: String,
  required: true,
 },
 cAbilityDescription: {
  type: String,
  required: true,
 },
 xAbilityName: {
  type: String,
  required: true,
 },
 xAbilityDescription: {
  type: String,
  required: true,
 },
 
});

module.exports = mongoose.model('Agent', agentSchema);
